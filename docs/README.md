---
title: Product-development documentation guide
document_id: DOC-INDEX
status: living
version: 0.2.0
applies_to: Alpha 0.2+
owner: Product
visibility: public
last_reviewed: 2026-09-06
---

# From product intent to release evidence

These documents are working product artifacts, not a polished retrospective. They show what each discipline needs to decide, how the decisions connect, and which details are expected to change as evidence arrives.

## Three levels of documentation

### 1. Orientation: learn the purpose

An orientation document teaches the concept, names the questions it should answer, and routes a reader to the right source of truth. This guide and each discipline's `README` serve that role.

### 2. Specification: define the contract

A specification is detailed enough to design, implement, and verify. Product requirements define observable behavior; technical requirements define system behavior; the design system defines visual and interaction behavior.

### 3. Evidence: show conformance

Code, tests, migrations, release notes, and deployed behavior show whether the implementation satisfies the specification. A document claiming something is complete is not completion evidence.

## Artifact map

| Question                                                | Primary artifact                                                          | Downstream proof                                    |
| ------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------- |
| Whose problem are we solving, and what outcome matters? | [Product requirements](product/product-requirements.md)                   | User journeys and acceptance tests                  |
| How should the experience be understood and navigated?  | [UX and information architecture](product/ux-information-architecture.md) | Routes, screen states, browser tests                |
| What must the system guarantee?                         | [Technical requirements](engineering/technical-requirements.md)           | Types, migrations, RLS, integration tests           |
| How are responsibilities divided?                       | [Architecture](engineering/architecture.md)                               | Module boundaries and decision records              |
| What should every surface look and behave like?         | [Design system](design/design-system.md)                                  | Tokens, components, `/system`, accessibility checks |
| Where and how may the software run?                     | [Environments and deployment](operations/environments-and-deployment.md)  | CI, runtime guards, health checks                   |
| What outcome is each release meant to produce?          | [Release plan](project/release-plan.md)                                   | Release notes and passing gates                     |
| Why was a consequential choice made?                    | [Decision records](decisions/README.md)                                   | Dated ADRs and superseding decisions                |

## Status language

- **Proposed:** open for material revision; not an implementation commitment.
- **Accepted:** the current contract; changes require an explicit decision.
- **Implemented:** present in code, but not necessarily proven in a release environment.
- **Verified:** demonstrated by the named test or release evidence.
- **Superseded:** retained for history and linked to the replacing document.

Every public document separates current behavior from future intent. Strategy, monetization, recruiting details, research transcripts, and quantitative investment gates remain private because public implementation context does not require them.

## Change discipline

When behavior changes:

1. Change the smallest canonical specification.
2. Record an ADR if the choice is costly to reverse, trust-critical, or cross-cutting.
3. Link the implementation issue and pull request.
4. Add or update the test that proves the contract.
5. Update the changelog and release evidence.

Duplicating requirements into tickets makes both sources unreliable. Tickets should quote only the acceptance criteria needed for that slice and link back to the canonical document.
