---
title: Application architecture
document_id: ARCH-001
status: accepted
version: 0.2.0
applies_to: Alpha 0.2+
owner: Engineering
visibility: public
last_reviewed: 2026-09-06
---

# Application architecture

## Architecture purpose

Architecture records the consequential boundaries that let the product requirements remain true as implementation grows. It should explain ownership, trust boundaries, data flow, and reversibility. File trees alone are not architecture.

## Context

```text
Browser
  │ HTTPS + secure cookies
  v
Next.js application ───────> Transactional email provider
  │ server actions/routes
  v
Supabase Auth + Postgres
  │ content-free events
  v
Internal analysis workspace
```

The Next.js application owns presentation, request validation, orchestration, and safe response shaping. Postgres owns durable invariants, row-level authorization, and trust-critical transitions. Email distributes status and access context without private contribution content. Analysis consumes coarse lifecycle events rather than private prose.

## Code boundaries

```text
src/app/       Routing, layouts, metadata, public/protected composition
src/modules/   Product capabilities grouped by domain
src/shared/    Cross-domain UI, shell, config, and service clients
src/styles/    Primitive, semantic, and Then & Now theme tokens
```

A module may depend on `shared`; `shared` must not import a product module. Routes compose modules but do not own durable domain rules. Database functions own atomic multi-row transitions.

## Request and session flow

1. The root proxy refreshes Supabase auth cookies when configured.
2. A protected layout verifies the user server-side.
3. Server Components query only the fields needed for the current state.
4. A server action validates untrusted form data with a shared schema.
5. Postgres applies row-level security and constraints.
6. The action returns a specific recoverable error or redirects after success.

Browser clients may support optimistic and autosave behavior, but they do not become the authority for reveal, membership, or deletion.

## Data foundation

Alpha 0.2 introduces:

- `profiles` — one member-owned display and locale record per auth user.
- `user_preferences` — independently owned communication/accessibility choices.
- `spaces` — private pair container and coarse lifecycle state.
- `space_memberships` — peer membership separate from auth identity.
- `domain_events` — server-only content-free lifecycle events.

Alpha 0.3 adds invitations, prompts, Exchanges, and Contributions. Alpha 0.4 adds experience state, Responses, and Chapter projections. Tables are introduced only with constraints, grants, policies, types, and tests.

## Authorization layers

1. **Route:** signed-out requests cannot render protected product pages.
2. **Server input:** every action validates identity, object identifier, expected state, and input schema.
3. **Database grants:** a role cannot issue operations it never needs.
4. **RLS:** row access is restricted to the current user or current Space membership.
5. **Response shaping:** pre-reveal queries cannot select partner prose, even if a future policy regresses.
6. **Tests:** two independent principals prove both allowed and denied cases.

The service role bypasses RLS and is therefore reserved for narrow server jobs with their own explicit authorization. It is not the default application client.

## Mutual-reveal design

The reveal operation belongs in a Postgres function rather than a sequence of client updates:

```text
begin transaction
  lock Exchange and both current Contributions
  verify caller membership, state, version, and idempotency key
  lock caller's exact Contribution version
  if both current Contributions are locked
    write one reveal timestamp and one event
  end if
commit
```

The pre-reveal read model exposes the member's own Contribution plus the partner's coarse state. The post-reveal model exposes both current non-void Contributions. Separate query contracts make accidental leakage harder than a single broad row with client-side hiding.

## Configuration

`APP_ENV` describes the running application. `DATA_ENV` describes the database it is allowed to contact. Public Supabase values are validated at use; absent local values produce an honest setup state. Preview plus production data throws before serving a misleading environment.

## Observability

- Health output: release, status, application environment.
- Operational logs: route, opaque request/object ID, result class, latency, release.
- Domain events: content-free state transition and dedupe key.
- Prohibited: email, invitation token, auth token, title, preface, reflection, content note, or copied URL query data.

## Decision posture

The architecture favors a modular monolith because the team and release are small, the core risk is transactional correctness, and one codebase keeps behavior easy to trace. The design leaves provider boundaries around auth, database, email, analytics, error reporting, and link distribution so evidence can justify later substitution without abstracting every local function today.
