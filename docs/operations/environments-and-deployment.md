---
title: Environments and deployment
document_id: OPS-001
status: accepted
version: 0.2.0
applies_to: Alpha 0.2+
owner: Engineering
visibility: public
last_reviewed: 2026-09-06
---

# Environments and deployment

## Why this exists

Environment design is a product trust decision. A preview that silently reads production relationship content is not a convenience; it is a privacy failure. This document defines what may run where and how a release is promoted.

## Environment matrix

| Application | Data       | Purpose                         | Personal data allowed                       |
| ----------- | ---------- | ------------------------------- | ------------------------------------------- |
| Local       | Local      | Development and automated tests | No; synthetic only                          |
| Preview     | Staging    | Pull-request review             | No; synthetic only                          |
| Staging     | Staging    | Integrated release verification | Invited test data only after pilot controls |
| Production  | Production | Controlled pilot                | Only after Alpha 0.5 approval               |

Preview-to-production is rejected by runtime configuration. Local and staging secrets are distinct from production.

## Required configuration

| Variable                               | Exposure      | Meaning                                            |
| -------------------------------------- | ------------- | -------------------------------------------------- |
| `APP_ENV`                              | Server        | `local`, `preview`, `staging`, or `production`     |
| `DATA_ENV`                             | Server        | `local`, `staging`, or `production`                |
| `NEXT_PUBLIC_APP_URL`                  | Browser-safe  | Canonical origin for the current deployment        |
| `NEXT_PUBLIC_SUPABASE_URL`             | Browser-safe  | Environment-specific Supabase API URL              |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Browser-safe  | Environment publishable key; RLS still applies     |
| `SUPABASE_SERVICE_ROLE_KEY`            | Server secret | Narrow jobs only; never imported into browser code |

Provider keys for email, errors, and link routing are server-only. `.env.local` is ignored; `.env.example` contains names and safe placeholders only.

## Promotion path

1. Pull request passes code, browser, accessibility, database, and generated-type checks.
2. Preview smoke test checks `/`, `/sign-in`, protected redirect, `/system`, and `/api/health` with synthetic data.
3. Merge to main produces the release candidate.
4. Staging runs authentication, two-user authorization, and migration smoke tests.
5. A release is tagged only after its exit criteria are evidenced.
6. Production promotion is manual until controlled-pilot operations are mature.

## Database changes

- Migrations move forward; editing an applied migration is prohibited.
- Destructive changes use expand/migrate/contract and require backup verification.
- Generated TypeScript types must match the fully migrated database.
- RLS tests cover a member, partner, unrelated authenticated user, anonymous user, and privileged job where applicable.

## Rollback

Application rollback redeploys the last known-good artifact. Database rollback is not assumed safe: forward-compatible application changes ship before schema contraction, and failed database releases receive a corrective forward migration. Trust-critical regressions suspend personal-data use while access and event evidence are reviewed.

## Smoke checks

- Health response identifies release and intended environment without secrets.
- Public pages render at desktop and mobile sizes.
- Signed-out `/app` redirects to sign-in.
- OTP creates or resumes one user and preserves only a safe destination.
- User A cannot query User B's profile, preferences, or unrelated Space.
- No console error, failed request, or log line contains a token or private prose.
