# ADR-0001: Use a modular monolith with Supabase

- **Status:** Accepted
- **Date:** 2026-09-06
- **Applies to:** Alpha 0.2+

## Context

The first useful release needs server-rendered web UI, passwordless identity, relational transactions, row-level authorization, migrations, and a rapid path from local development to a small pilot. The main technical risk is private-state correctness, not independent service scaling.

## Decision

Use one TypeScript Next.js App Router application organized by product module. Use Supabase for managed Auth and Postgres. Keep durable authorization and multi-row state transitions in Postgres; keep request validation and orchestration in server routes/actions.

## Consequences

- One repository and deployable artifact keep behavior traceable during Alpha.
- Auth and database identity share a managed boundary.
- RLS and transactions can express pair isolation and reveal integrity.
- Provider availability and Postgres knowledge become dependencies.
- Module boundaries must be maintained deliberately because deployment boundaries do not enforce them.

## Revisit when

Independent scaling, operational ownership, or a materially different client requires a separate service—not merely because a service-oriented diagram appears more sophisticated.
