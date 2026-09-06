# ADR-0002: Treat mutual reveal as a database gate

- **Status:** Accepted
- **Date:** 2026-09-06
- **Applies to:** Alpha 0.3+

## Context

Both members must commit without seeing the other person's choice. Client-side hiding, blur, broad rows filtered in UI, or two sequential updates can leak content or create asymmetric states under concurrency.

## Decision

Implement lock, allowed withdrawal, and reveal as versioned, idempotent Postgres commands. The second valid lock serializes the Exchange and both Contributions, records one reveal timestamp, and commits one event atomically. Pre-reveal and post-reveal reads expose different field sets.

## Consequences

- Trust does not depend on animation or browser behavior.
- Concurrency tests become release gates.
- Domain mutation code is less portable than generic application updates.
- Database changes require disciplined migrations and generated types.

## Rejected options

- Client-side concealment: data has already crossed the trust boundary.
- Sequential server updates: a partial failure can produce mixed state.
- Timer-based reveal: consent and readiness become ambiguous.
