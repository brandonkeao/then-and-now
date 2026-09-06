begin;

select plan(10);

insert into auth.users (id, email)
values
  ('00000000-0000-4000-8000-000000000001', 'alpha-one@example.test'),
  ('00000000-0000-4000-8000-000000000002', 'alpha-two@example.test');

select is(
  (select count(*) from public.profiles),
  2::bigint,
  'new auth users receive profiles'
);

select is(
  (select count(*) from public.user_preferences),
  2::bigint,
  'new auth users receive default preferences'
);

insert into public.spaces (id, created_by_user_id)
values
  ('10000000-0000-4000-8000-000000000001', '00000000-0000-4000-8000-000000000001'),
  ('10000000-0000-4000-8000-000000000002', '00000000-0000-4000-8000-000000000002');

insert into public.space_memberships (space_id, user_id, role, status, joined_at)
values
  (
    '10000000-0000-4000-8000-000000000001',
    '00000000-0000-4000-8000-000000000001',
    'guide',
    'active',
    now()
  ),
  (
    '10000000-0000-4000-8000-000000000002',
    '00000000-0000-4000-8000-000000000002',
    'guide',
    'active',
    now()
  );

set local role authenticated;
select set_config('request.jwt.claim.sub', '00000000-0000-4000-8000-000000000001', true);
select set_config(
  'request.jwt.claims',
  '{"sub":"00000000-0000-4000-8000-000000000001","role":"authenticated"}',
  true
);

select is(
  (select count(*) from public.profiles),
  1::bigint,
  'a member can select only their own profile'
);

select is(
  (
    select count(*)
    from public.profiles
    where user_id = '00000000-0000-4000-8000-000000000002'
  ),
  0::bigint,
  'a member cannot select another profile'
);

select is(
  (select count(*) from public.user_preferences),
  1::bigint,
  'a member can select only their own preferences'
);

select is(
  (select count(*) from public.spaces),
  1::bigint,
  'a member cannot select a nonmember space'
);

select is(
  (select count(*) from public.space_memberships),
  1::bigint,
  'a member cannot select memberships from another space'
);

update public.profiles
set display_name = 'Alpha one'
where user_id = '00000000-0000-4000-8000-000000000001';

select is(
  (
    select display_name
    from public.profiles
    where user_id = '00000000-0000-4000-8000-000000000001'
  ),
  'Alpha one',
  'a member can update their own profile'
);

update public.profiles
set display_name = 'Leaked update'
where user_id = '00000000-0000-4000-8000-000000000002';

set local role postgres;

select is(
  (
    select display_name
    from public.profiles
    where user_id = '00000000-0000-4000-8000-000000000002'
  ),
  '',
  'a member cannot update another profile'
);

set local role authenticated;
select set_config('request.jwt.claim.sub', '00000000-0000-4000-8000-000000000001', true);

select throws_ok(
  'select * from public.domain_events',
  '42501',
  null,
  'clients cannot read internal domain events'
);

set local role postgres;

select is(
  (
    select count(*)
    from information_schema.role_table_grants
    where grantee = 'anon'
      and table_schema = 'public'
      and table_name in ('profiles', 'user_preferences', 'spaces', 'space_memberships')
  ),
  0::bigint,
  'anonymous clients have no protected-table grants'
);

select * from finish();
rollback;
