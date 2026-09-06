---
title: Technical requirements
document_id: TRD-001
status: accepted
version: 0.2.0
applies_to: Alpha 0.2–0.5
owner: Engineering
visibility: public
last_reviewed: 2026-09-06
---

# Technical requirements

## What a TRD does

A product requirement describes observable user behavior. A technical requirement defines the system qualities and enforceable contracts necessary to deliver that behavior safely. Architecture explains how this implementation satisfies those contracts; code and tests provide the evidence.

## System context

Then & Now is a responsive web application with server-rendered routes, managed passwordless authentication, Postgres persistence, email delivery, and a content-free analytics path. The Alpha favors one deployable application and one database over premature service separation.

## Release-level requirements

### TR-01 — Identity and sessions

- Use managed email OTP authentication; never store application passwords.
- Validate the current user on the server before rendering protected content.
- Refresh session cookies in the root request proxy.
- Use HTTP-only, secure-in-production, same-site cookies for temporary authentication context.
- Accept post-authentication destinations only under `/app`; reject protocol, host, slash, backslash, and header-injection variants.
- Avoid exposing whether an email already owns an account.

### TR-02 — Authorization and isolation

- Enable row-level security on every protected public table before granting client access.
- Default new protected resources to no client grants and no policies.
- A signed-out or unrelated user cannot read a profile, preference, Space, membership, Contribution, Response, or Chapter.
- A member may read only the Spaces to which they belong and only the minimum partner metadata required by the current state.
- Service-role credentials are server-only and never present in the browser bundle.
- Authorization is verified with two independently authenticated test users.

### TR-03 — Mutual reveal

- Partner contribution prose is not queryable before the reveal predicate is true.
- The second valid lock and reveal timestamp are committed in one serialized database transaction.
- Lock and withdrawal commands carry expected version and idempotency keys.
- Concurrent lock-versus-lock produces exactly one reveal.
- Concurrent lock-versus-withdraw either withdraws before the gate or reveals; it cannot leave mixed visibility.
- A failed transaction leaves both contributions sealed and retryable.

### TR-04 — Data integrity

- Every schema change is an ordered, committed migration.
- Foreign keys, check constraints, and unique indexes encode stable invariants.
- Application types are generated reproducibly from the migrated local database.
- Development and tests use synthetic data only.
- Production data is never copied into preview or local environments.

### TR-05 — Private content handling

- Contribution and Response prose is excluded from analytics, ordinary logs, errors, traces, notification previews, and support exports by default.
- Domain events store lifecycle names, opaque object identifiers, coarse states, timestamps, and schema-versioned non-content properties only.
- Source URLs accept only HTTP and HTTPS and open with safe external-link behavior.
- Tokens and email addresses are classified as restricted identifiers and scrubbed from logs.

### TR-06 — Reliability and recovery

- Draft writes are debounced, versioned, observable as Saving/Saved/Offline/Retry, and recoverable locally after transient failure.
- Trust-critical mutations are server-confirmed and idempotent.
- Invitation and notification jobs have dedupe keys and observable delivery status.
- Health checks return release and environment state without database content or secrets.
- Backup restoration is tested before pilot use.

### TR-07 — Accessibility and responsive behavior

- Core journeys target WCAG 2.2 AA.
- Keyboard, focus, reduced-motion, zoom, and 320 CSS px behavior are release checks.
- Dialogs use a tested accessible primitive and restore focus on close.
- Browser tests run at representative desktop and mobile viewports.
- Automated accessibility results never replace manual review.

### TR-08 — Environment separation

- Environments are explicitly named `local`, `preview`, `staging`, or `production`.
- Data environments are explicitly named `local`, `staging`, or `production`.
- A preview application refuses to start against production data.
- Secrets live in the deployment platform or local ignored file, never Git.
- Database projects and email sender configuration are separate between staging and production.

### TR-09 — Delivery and quality

- Pull requests run format, lint, strict TypeScript, unit, production-build, browser, accessibility, migration, RLS, and generated-type checks as applicable.
- Main remains releasable; trust-critical test failure blocks deployment.
- Logs and artifacts retained by CI contain no user-entered prose or secret values.
- Releases identify the implemented scope and known exclusions.

## Alpha 0.2 acceptance matrix

| Contract                              | Implementation                            | Evidence                                |
| ------------------------------------- | ----------------------------------------- | --------------------------------------- |
| Public and protected route separation | App Router layouts and server auth query  | Build route map; browser redirect check |
| Safe authentication destination       | Allowlisted `/app` path helper            | Unit attack-string matrix               |
| Environment boundary                  | Zod configuration guard                   | Unit preview/production rejection       |
| Protected-table default denial        | RLS and selective grants                  | pgTAP two-user tests                    |
| Repeatable schema                     | Ordered Supabase migration                | CI local stack and database lint        |
| Shared visual language                | Primitive, semantic, product tokens       | `/system` and component tests           |
| Responsive accessible entry           | Semantic pages and UI primitives          | Playwright desktop/mobile + axe         |
| Deployable artifact                   | Next.js production build and health route | CI build; deployment smoke test         |

## Performance budgets

Alpha budgets are guardrails, not marketing claims:

- Public landing should ship no client JavaScript beyond framework requirements and interactive primitives actually used.
- Protected initial shell should avoid catalog, editor, and visualization dependencies.
- Images require explicit dimensions and responsive delivery before media artwork is introduced.
- Database list queries require a member-scoped predicate, deterministic order, and bounded result count.
- New dependencies need an owned use case and should not duplicate platform capability.

## Deferred technical requirements

Billing, entitlements, multiple concurrent relationships, public APIs, imports, recommendation systems, AI processing, and native notifications are excluded until product evidence justifies them.
