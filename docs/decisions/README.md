---
title: Architecture decision records
document_id: ADR-INDEX
status: living
version: 0.2.0
applies_to: All releases
owner: Product and Engineering
visibility: public
last_reviewed: 2026-09-06
---

# Architecture decision records

An ADR records one consequential choice, the forces acting on it, the selected option, and its consequences. ADRs are useful when a future contributor might otherwise repeat the debate or accidentally violate a trust boundary.

Use an ADR when a choice is expensive to reverse, cross-cutting, trust-critical, or changes an accepted requirement. Do not use one for every component or ticket.

| Decision                                             | Status   | Summary                                              |
| ---------------------------------------------------- | -------- | ---------------------------------------------------- |
| [ADR-0001](0001-modular-monolith-and-supabase.md)    | Accepted | One Next.js application with Supabase Auth/Postgres  |
| [ADR-0002](0002-mutual-reveal-is-a-database-gate.md) | Accepted | Reveal privacy and concurrency are database-enforced |

Private business choices and research gates are not mirrored into this public log.
