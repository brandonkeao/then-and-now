-- Supabase projects may grant table privileges to API roles through default
-- privileges. Protected Alpha tables remain completely unavailable to anon;
-- authenticated access is still constrained by the explicit grants and RLS
-- policies in the foundation migration.
revoke all on public.profiles from anon;
revoke all on public.user_preferences from anon;
revoke all on public.spaces from anon;
revoke all on public.space_memberships from anon;
revoke all on public.domain_events from anon;
