---
title: UX and information architecture
document_id: UX-001
status: accepted
version: 0.2.0
applies_to: Alpha 0.2–0.5
owner: Product Design
visibility: public
last_reviewed: 2026-09-06
---

# UX and information architecture

## What this artifact does

The PRD says what users must be able to accomplish. UX and information architecture define how they understand where they are, what state the relationship is in, what action is available, and how they recover. This document bridges product behavior and screen design without turning into a collection of pixel-specific mockups.

## UX thesis

Then & Now is a private ritual, not a productivity workspace. The interface makes the next relational step obvious while minimizing administration, media-management behavior, and pressure.

The user-facing object is an **Exchange**. Internal models may use `space`, `membership`, `contribution`, and `gate`, but interface language should remain human and relationship-neutral.

## Principles

1. One screen makes one consequential decision clear.
2. Both people receive equal visual and permission weight.
3. Private content is visibly sealed and technically absent before reveal.
4. Waiting feels calm, never overdue.
5. A person may be honest about access, capacity, or discomfort without justification.
6. Progress coordinates; it does not surveil.
7. The archive preserves meaning rather than performing taste.
8. An invited person can understand the experience without founder explanation.

## Route map

### Public and access

- `/` — product explanation and entry.
- `/sign-in` — sign in or create an account by email.
- `/verify` — short-lived code verification.
- `/auth/confirm` — safe email-link callback.
- `/i/[code]` — future invitation preview and accept flow.
- `/legal/privacy` and `/legal/terms` — current boundaries.
- `/api/health` — non-sensitive release health.

### Authenticated

- `/app` — current Exchange or no-pair state.
- `/app/exchanges/[id]` — future stable URL across draft, wait, reveal, experience, and reflection.
- `/app/archive` and `/app/archive/[id]` — Chapters.
- `/app/you` — settings overview.
- `/app/you/account` — name, email, timezone, authentication.
- `/app/you/notifications` — reminders and quiet behavior.
- `/app/you/privacy` — export, deletion, invitation, and block controls.
- `/app/you/relationship` — pause, close, leave, report, and cadence.

## Navigation

Desktop uses a compact top header: product identity left; Exchange, Archive, You, and sign out right. Mobile uses a compact identity bar and three-item bottom navigation. A sidebar would make three destinations feel like work software and is deferred until the information architecture actually requires it.

## State model

| State          | What the member needs to know            | Primary action      | Recovery                      |
| -------------- | ---------------------------------------- | ------------------- | ----------------------------- |
| No pair        | What is this and whom might I invite?    | Invite someone      | Review how it works           |
| Invite pending | Is the invitation active?                | Copy or reissue     | Revoke or correct email       |
| Ready          | Who selects the prompt?                  | Choose prompt       | Request lighter prompt        |
| Choosing       | Is my draft private and saved?           | Lock my choice      | Save and return               |
| I locked       | Who acts next?                           | Wait                | Withdraw while partner drafts |
| Both locked    | Did reveal complete safely?              | Read choices        | Retry without leakage         |
| Revealed       | What did each person choose and why?     | Accept commitment   | Lighter/access/replacement    |
| Experiencing   | What is my smallest honest next step?    | Update state        | Snooze or pause               |
| One responded  | Is my Response safe and visible?         | Wait or return      | Edit before completion        |
| Complete       | What did we learn and what happens next? | Read or start again | Pause without losing history  |

## Alpha 0.2 screens

### Marketing

The page leads with the outcome, demonstrates equal sealed objects, explains the three-step mechanism, gives one real prompt, and states the privacy boundaries. It avoids feature-card walls, invented customer logos, AI claims, and a dashboard mockup for functionality that does not exist.

### Authentication

The screen uses a concrete `Email me a code` action, keeps visible labels, preserves a safe product destination, and explains when local authentication is not configured. Verification distinguishes missing, invalid, and expired context without exposing account existence.

### Onboarding

Only display name, timezone, and adult eligibility are requested. Organization, logo, workspace name, and slug do not belong to this relationship model.

### Empty Exchange

The protected home shows the product's paired structure and honestly labels invitation as the next slice. Disabled behavior has explanatory copy rather than pretending the action works.

### Settings

You is an overview that links to account, relationship, notifications, and privacy. Destructive controls remain separate, explained, and unavailable until their server behavior exists.

### Design-system specimen

`/system` is open locally and protected in production. It demonstrates tokens, type roles, controls, forms, status, recovery messages, and dialog behavior against the same implementation used by the product.

## Responsive contract

- Marketing maximum width: 1360 px; app maximum: 1120 px; ritual reading width: 760–880 px.
- Gutters: 20 px compact, 32 px medium, 48 px wide.
- At 320 CSS px, no content or action requires horizontal scrolling.
- Mobile navigation never covers the final interactive element.
- Paired objects become a labeled stack rather than shrinking into illegibility.
- Tap targets are at least 44 by 44 CSS px where the control permits.

## Forms and recovery

- Labels remain visible; placeholders are examples, not labels.
- Reflective prose uses the narrative type role; controls use the UI role.
- Drafting surfaces expose Saving, Saved, Offline, and Retry.
- Server confirmation is required for lock, reveal, revocation, deletion, and relationship exit.
- Errors preserve input and explain the missing or failed behavior.
- Button labels name the object and verb: `Email me a code`, `Lock my choice`, `Pause this Exchange`.

## Accessibility

- One logical heading hierarchy and landmark structure per page.
- Keyboard access and visible focus for all interactive elements.
- Color is never the only state signal.
- Reveal motion is optional and does not delay programmatic state.
- Status updates use concise announcements without reading private prose unexpectedly.
- Automated axe checks supplement, rather than replace, keyboard and screen-reader review.

## Content standard

Use direct, calm language. Prefer “when you’re ready,” “waiting,” and “check-in.” Avoid “overdue,” “complete your task,” “streak,” “relationship health,” or any language that turns another person into a performance metric.
