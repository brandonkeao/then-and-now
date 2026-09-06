create extension if not exists pgcrypto with schema extensions;

create schema if not exists private;
revoke all on schema private from public, anon, authenticated;

create table public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '',
  timezone text not null default 'UTC',
  locale text not null default 'en',
  avatar_path text,
  adult_acknowledged_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  constraint profiles_display_name_length check (char_length(display_name) <= 80),
  constraint profiles_timezone_length check (char_length(timezone) between 1 and 80),
  constraint profiles_locale_length check (char_length(locale) between 2 and 16)
);

create table public.user_preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email_reminders_enabled boolean not null default true,
  partner_locked_email_enabled boolean not null default true,
  reveal_email_enabled boolean not null default true,
  invite_permissions text not null default 'intended_email_only',
  quiet_hours_start time,
  quiet_hours_end time,
  reduced_motion_override boolean,
  updated_at timestamptz not null default now(),
  constraint user_preferences_invite_permissions check (
    invite_permissions in ('intended_email_only', 'closed')
  )
);

create table public.spaces (
  id uuid primary key default gen_random_uuid(),
  created_by_user_id uuid not null references auth.users(id) on delete restrict,
  status text not null default 'forming',
  cadence_mode text not null default 'self_paced',
  cadence_days integer not null default 30,
  guide_membership_id uuid,
  active_exchange_id uuid,
  next_exchange_at timestamptz,
  created_at timestamptz not null default now(),
  activated_at timestamptz,
  paused_at timestamptz,
  closed_at timestamptz,
  constraint spaces_status check (status in ('forming', 'active', 'paused', 'closed')),
  constraint spaces_cadence_mode check (cadence_mode in ('self_paced', 'monthly')),
  constraint spaces_cadence_days check (cadence_days between 7 and 365)
);

create table public.space_memberships (
  id uuid primary key default gen_random_uuid(),
  space_id uuid not null references public.spaces(id) on delete cascade,
  user_id uuid references auth.users(id) on delete set null,
  role text not null default 'member',
  status text not null default 'active',
  joined_at timestamptz,
  left_at timestamptz,
  constraint space_memberships_role check (role in ('guide', 'member')),
  constraint space_memberships_status check (
    status in ('pending', 'active', 'left', 'blocked')
  )
);

create unique index space_memberships_one_user_per_space
  on public.space_memberships (space_id, user_id)
  where user_id is not null;

create index space_memberships_user_id on public.space_memberships (user_id);

create table public.domain_events (
  id uuid primary key default gen_random_uuid(),
  event_name text not null,
  aggregate_type text not null,
  aggregate_id uuid not null,
  actor_user_id uuid references auth.users(id) on delete set null,
  dedupe_key text not null unique,
  payload jsonb not null default '{}'::jsonb,
  occurred_at timestamptz not null default now(),
  constraint domain_events_event_name_length check (char_length(event_name) between 1 and 100),
  constraint domain_events_aggregate_type_length check (
    char_length(aggregate_type) between 1 and 60
  ),
  constraint domain_events_dedupe_key_length check (char_length(dedupe_key) between 1 and 180),
  constraint domain_events_payload_is_object check (jsonb_typeof(payload) = 'object')
);

create index domain_events_aggregate on public.domain_events (aggregate_type, aggregate_id);
create index domain_events_occurred_at on public.domain_events (occurred_at);

alter table public.profiles enable row level security;
alter table public.user_preferences enable row level security;
alter table public.spaces enable row level security;
alter table public.space_memberships enable row level security;
alter table public.domain_events enable row level security;

create or replace function private.is_space_member(target_space_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.space_memberships membership
    where membership.space_id = target_space_id
      and membership.user_id = (select auth.uid())
      and membership.status = 'active'
  );
$$;

create or replace function private.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (user_id)
  values (new.id)
  on conflict (user_id) do nothing;

  insert into public.user_preferences (user_id)
  values (new.id)
  on conflict (user_id) do nothing;

  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure private.handle_new_user();

create policy "profiles_select_own"
  on public.profiles for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "profiles_update_own"
  on public.profiles for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "preferences_select_own"
  on public.user_preferences for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "preferences_update_own"
  on public.user_preferences for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "spaces_select_for_member_or_creator"
  on public.spaces for select
  to authenticated
  using (
    created_by_user_id = (select auth.uid())
    or private.is_space_member(id)
  );

create policy "spaces_insert_own"
  on public.spaces for insert
  to authenticated
  with check (created_by_user_id = (select auth.uid()));

create policy "memberships_select_for_space_member_or_creator"
  on public.space_memberships for select
  to authenticated
  using (
    private.is_space_member(space_id)
    or exists (
      select 1
      from public.spaces space
      where space.id = space_id
        and space.created_by_user_id = (select auth.uid())
    )
  );

create policy "memberships_insert_for_space_creator"
  on public.space_memberships for insert
  to authenticated
  with check (
    exists (
      select 1
      from public.spaces space
      where space.id = space_id
        and space.created_by_user_id = (select auth.uid())
    )
  );

grant usage on schema public to anon, authenticated;
grant select, update on public.profiles to authenticated;
grant select, update on public.user_preferences to authenticated;
grant select, insert on public.spaces to authenticated;
grant select, insert on public.space_memberships to authenticated;

revoke all on public.domain_events from anon, authenticated;
revoke all on all functions in schema private from public, anon, authenticated;
grant execute on function private.is_space_member(uuid) to authenticated;

comment on table public.domain_events is
  'Content-free lifecycle events only. Never store emails, private contributions, reflections, or tokens.';
