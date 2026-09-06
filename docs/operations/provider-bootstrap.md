---
title: Provider bootstrap
document_id: OPS-002
status: accepted
version: 0.2.0
applies_to: Alpha 0.2+
owner: Engineering
visibility: public
last_reviewed: 2026-09-06
---

# Provider bootstrap

## Why this exists

The repository is reproducible without sharing provider credentials. This runbook identifies the small, auditable bridge between committed application behavior and hosted preview or staging infrastructure.

## One-time account connection

An authorized maintainer must sign in to Supabase and Vercel. Provider authorization is deliberately not automated from a developer workstation.

1. Create one Supabase project for staging. Keep production separate and unprovisioned until the production-data gate is approved.
2. Link this repository with the Supabase CLI and apply every committed migration in order.
3. Set the Supabase site URL and redirect allowlist to the deployed staging origin and its `/auth/confirm` route.
4. Configure the email template to link to `/auth/confirm` with `token_hash`, `type`, and a safe `/app` destination. The numeric OTP flow remains available from the verification screen.
5. Import `brandonkeao/then-and-now` into Vercel and set the project root to the repository root.
6. Configure preview and staging variables from `.env.example`. Set `APP_ENV=preview` for previews, `APP_ENV=staging` for staging, and `DATA_ENV=staging` for both.
7. Never add `SUPABASE_SERVICE_ROLE_KEY` to a `NEXT_PUBLIC_*` variable or to client-side code.

## Database proof

Run the migrations, RLS tests, and deterministic type check before connecting the application:

```sh
pnpm db:start
pnpm db:lint
pnpm db:test
pnpm db:types:check
```

The same sequence runs in CI against a clean database.

## Hosted smoke proof

Create a protected GitHub environment named `staging` with these secrets:

- `SUPABASE_URL` — the staging project URL.
- `SUPABASE_SERVICE_ROLE_KEY` — the staging service-role key.

Run **Hosted Alpha smoke checks** from GitHub Actions and supply the deployed origin. The workflow verifies public rendering, the uncached health contract, signed-out protection, and a real synthetic passwordless session. It deletes the synthetic account even when an assertion fails and disables screenshots, video, and traces so the one-time credential is not retained as an artifact.

## Release evidence

Record the successful workflow URL and deployed commit in the release issue. Alpha 0.2 is ready to tag when the normal CI workflow, hosted smoke workflow, and a manual mobile check all pass for the same commit.
