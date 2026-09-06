---
title: Public release plan
document_id: PLAN-001
status: living
version: 0.2.0
applies_to: Alpha 0.2–0.5
owner: Product and Engineering
visibility: public
last_reviewed: 2026-09-06
---

# Release plan

## Why releases are outcome-based

A release slice should create one demonstrable user or system capability. Ticket count and code volume do not prove progress. Each phase below has an outcome and exit evidence; dates and private investment gates are managed separately.

## Alpha 0.2 — Runnable foundation

Outcome: authenticate, complete a minimal profile, and return to a protected empty shell that uses the real design system and migration-backed data foundation.

Exit evidence:

- Public, authentication, and protected route behavior passes browser smoke tests.
- Design-system specimen and production components share tokens.
- Profile/preferences RLS prevents cross-user access.
- Format, lint, types, unit, accessibility, database, and build checks pass.
- Preview/staging environment configuration cannot point at production data.

## Alpha 0.3 — Private-pair Exchange

Outcome: two independent people form one Space, privately choose against a shared prompt, and reveal exactly once after both lock.

Exit evidence:

- Email-bound invitation expiry, revocation, intended account, and one-time use are server enforced.
- Two browser principals form one pair and no third principal can retrieve it.
- Partner prose is absent before reveal.
- Lock-versus-lock and lock-versus-withdraw concurrency tests pass.
- Reveal emits one content-free event and survives safe retry.

## Alpha 0.4 — Complete loop and data

Outcome: both people can experience, reflect, preserve one Chapter, and choose whether to begin again.

Exit evidence:

- One pair completes invitation through Chapter on mobile and desktop.
- Submitted versus draft Response visibility is enforced.
- Event data reconstructs stage timing without reconstructing private content.
- Settings, notification, archive, and pause states handle empty/error/recovery behavior.

## Alpha 0.5 — Pilot readiness

Outcome: the product can support a small controlled pilot without ad hoc access or ambiguous recovery.

Exit evidence:

- Authentication/invite recovery and notification deduplication pass.
- Leave, block, report, export, and deletion procedures are exercised.
- Privacy, terms, shared-content, support, and incident procedures are published.
- Authorization, accessibility, backup/restore, rate-limit, and failure checklists pass.
- Trust-critical and pilot-blocking defects are closed or explicitly accepted.

## Scope discipline

Payments, public community, AI interpretation, multiple active relationships, media discovery, and native apps remain outside these Alpha releases. Evidence may change a later plan through a dated decision; it should not silently rewrite the meaning of a completed release.
