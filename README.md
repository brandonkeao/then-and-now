# Then & Now

Then & Now is a private, recurring ritual for two people to exchange one book or film that says something meaningful about who they are. Each person chooses privately. Both choices are revealed together. What the pair learns becomes a shared Chapter rather than another recommendation lost in a text thread.

This repository is both the working application and a public, living example of how product strategy becomes a designed, tested software release. It intentionally exposes the product-development artifacts that usually disappear between an idea and an interface.

> **Release:** Alpha 0.2 — runnable foundation  
> **Status:** active development; not ready for personal or sensitive data  
> **License:** source available for review; All Rights Reserved

## What exists in Alpha 0.2

- A responsive marketing page, legal pages, and passwordless email-code flow.
- A protected product shell with Exchange, Archive, and You navigation.
- Profile onboarding with display name, timezone, and adult eligibility.
- Settings shells for account, relationship, notifications, and privacy.
- A token-based visual system and an implementation specimen at `/system`.
- Supabase migrations for profiles, preferences, private pair spaces, memberships, and content-free domain events.
- Row-level security that defaults protected data to inaccessible.
- Unit, browser, accessibility, migration, and RLS checks wired into CI.
- A hosted smoke workflow for public, protected, and synthetic passwordless-auth paths.
- Explicit local, preview, staging, and production environment boundaries.

The invitation, contribution, mutual-reveal, reflection, and Chapter loop belongs to later Alpha slices. The distinction between **implemented**, **specified**, and **hypothesized** behavior is maintained throughout the documentation.

## How the product artifacts fit together

A product requirements document should explain the user problem and observable behavior. A technical requirements document translates that behavior into system qualities and contracts. UX and design documents define how people understand and operate those contracts. Architecture records the consequential implementation choices. Tests and releases provide evidence that the result actually conforms.

```text
Product requirements ─┬─> UX and information architecture ─> Design system ─┐
                      └─> Technical requirements ────────────> Architecture ─┤
                                                                            v
                                                        Build ─> Tests ─> Release
```

Start with the [documentation guide](docs/README.md) to see which question each artifact answers and when to use it. Go directly to:

- [Product requirements](docs/product/product-requirements.md)
- [UX and information architecture](docs/product/ux-information-architecture.md)
- [Technical requirements](docs/engineering/technical-requirements.md)
- [Architecture](docs/engineering/architecture.md)
- [Raw design-system standard](docs/design/design-system.md)
- [Selected design direction and implementation boundary](docs/design/iteration-2026-09-07.md)
- [Environment and deployment model](docs/operations/environments-and-deployment.md)
- [Provider bootstrap and hosted smoke runbook](docs/operations/provider-bootstrap.md)
- [Release plan](docs/project/release-plan.md)
- [Architecture decisions](docs/decisions/README.md)

Private business strategy, monetization hypotheses, recruiting plans, interview notes, and decision thresholds are deliberately maintained outside this repository.

## Product model

The MVP has four primary domain objects:

1. A **Space** is a private relationship between exactly two adult peers.
2. An **Exchange** is one prompt and one contribution from each person.
3. A **Contribution** is a book or film, an agreed commitment, and a personal preface.
4. A completed Exchange becomes a shared **Chapter** after both people reflect.

The mutual-reveal gate is a trust boundary, not a visual effect: a partner's private draft must not appear in a client response, prefetch, log, event, or accessible query before both people lock.

## Technology

- Next.js App Router, React, and TypeScript
- Supabase Auth and Postgres with row-level security
- CSS Modules with project-owned design tokens
- Radix primitives for complex interaction foundations
- Vitest and Testing Library for unit/component tests
- Playwright and axe-core for browser/accessibility checks
- GitHub Actions for continuous integration

## Run locally

Requirements:

- Node.js 22 (see `.nvmrc`)
- pnpm 10.26.1
- Docker Desktop or Podman for the local Supabase stack

```bash
pnpm install
cp .env.example .env.local
pnpm db:start
pnpm dev
```

Copy the local API URL and publishable key printed by Supabase into `.env.local`, then open [http://localhost:3000](http://localhost:3000). Local email messages are available through the SMTP inbox URL printed by `pnpm db:start`.

Do not place a service-role key in a `NEXT_PUBLIC_` variable. Do not connect a preview deployment to production data; the application refuses that combination at runtime.

## Useful commands

| Command               | Purpose                                                            |
| --------------------- | ------------------------------------------------------------------ |
| `pnpm dev`            | Run the Next.js development server                                 |
| `pnpm check`          | Run formatting, linting, types, unit tests, and a production build |
| `pnpm test:e2e`       | Run desktop/mobile browser and accessibility tests                 |
| `pnpm test:smoke`     | Verify a configured preview or staging deployment                  |
| `pnpm db:start`       | Start the local Supabase stack and apply migrations                |
| `pnpm db:lint`        | Lint the local database schema                                     |
| `pnpm db:test`        | Run database and RLS tests                                         |
| `pnpm db:types`       | Regenerate committed database types from local migrations          |
| `pnpm db:types:check` | Verify committed types match the migration state                   |

## Repository map

```text
src/app/                 Routes, layouts, and release surfaces
src/modules/             Domain-oriented UI, actions, and data access
src/shared/              Shared shell, UI, configuration, and clients
src/styles/              Primitive, semantic, and product-theme tokens
supabase/migrations/     Versioned database changes
supabase/tests/          Authorization and data-contract tests
tests/e2e/               Browser and accessibility journeys
tests/smoke/             Hosted public, protected, and synthetic-auth proof
docs/                    Product-development concepts and specifications
```

## Security and privacy

Then & Now is designed for private relationship content. Alpha software must not be trusted with meaningful personal material until the pilot-readiness controls are complete. Report vulnerabilities privately using the process in [SECURITY.md](SECURITY.md); do not open a public issue containing sensitive details.

## Contributing

This is a public portfolio and learning repository, not an open-source project. Feedback and issue reports are welcome; contribution and reuse expectations are described in [CONTRIBUTING.md](CONTRIBUTING.md) and [LICENSE](LICENSE).

## Release history

See [RELEASES.md](RELEASES.md) for release contracts and [CHANGELOG.md](CHANGELOG.md) for notable repository changes.

Copyright © 2026 Brandon Keao. All Rights Reserved.
