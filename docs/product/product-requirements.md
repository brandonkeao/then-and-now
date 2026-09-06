---
title: Product requirements
document_id: PRD-001
status: accepted
version: 0.2.0
applies_to: Alpha 0.2–0.5
owner: Product
visibility: public
last_reviewed: 2026-09-06
---

# Product requirements: Then & Now

## What a PRD does

A product requirements document connects a user problem to observable behavior. It should be specific enough that design can model the states, engineering can identify system contracts, and a reviewer can decide whether the result works. It should not prescribe every implementation detail or pretend that unvalidated business assumptions are facts.

## Product summary

Then & Now helps two adults trade one book or film that reveals something about who they are, experience the other person's choice, and preserve what they learned in a private shared archive.

The relationship is intentionally neutral. A pair may be friends, siblings, coworkers, partners, relatives, mentors, or any two people who freely choose to participate as peers.

## User problem

Meaningful recommendations are easy to send and easy to lose. The recipient often lacks context, the sender never learns what landed, and the exchange rarely creates a durable shared memory. Existing media products optimize catalogs, taste identity, ratings, discovery, or group discussion rather than a reciprocal act between two specific people.

## Product promise

Trade one story that explains who you are. Neither person goes first; both choices remain private until both people explicitly lock them.

## Goals

1. Let one adult invite one other adult into a private pair.
2. Give one shared prompt enough structure to make two different selections meaningful.
3. Keep both contributions private until both people commit.
4. Reveal both contributions reliably and symmetrically.
5. Support honest, low-pressure experience and reflection.
6. Preserve completed Exchanges as a private chronological archive.
7. Measure lifecycle progress without reading or classifying private content.

## Non-goals

- Public profiles, feeds, followers, likes, comments, or user discovery.
- Media recommendations, ratings, reviews, or catalog completeness.
- Chat, group spaces, book-club logistics, watch parties, or detailed progress tracking.
- Streaks, points, badges, relationship scores, sentiment, or inferred closeness.
- AI-generated relationship analysis or summaries.
- Native applications, push notifications, SMS, payments, or arbitrary uploads in the initial Alpha.
- Public sharing of a contribution, preface, response, or Chapter.

## Product model

### Space

- A private relationship between exactly two independently authenticated adults.
- Members are peers; the inviter has no permanent administrative authority.
- Zero or one active Exchange.
- A self-paced cadence, pause state, and individual notification preferences.

### Exchange

- One shared prompt.
- One Contribution from each member.
- A mutual-lock reveal gate.
- One experience state and Response per member.
- A content-free transition history.

### Contribution

- Artifact type: book or film.
- Title; optional creator, year, and source URL.
- Commitment: complete work, agreed portion, or custom scope.
- Required preface: “Why I chose this for you.”
- Optional note about what to notice and a content note.
- Draft version, lock time, and reveal eligibility.

### Chapter

A completed Exchange containing the prompt, revealed Contributions, commitments, submitted Responses, and dates. It has no rating or score.

## Lifecycle

```text
no_space
  → invite_pending
  → ready_to_start
  → collecting_choices
  → one_choice_locked
  → revealed
  → experiencing
  → partially_responded
  → complete
```

Side states are `paused`, `closed_incomplete`, and `archived`. No timer reveals or deletes an Exchange.

## Release slices

### Alpha 0.2: runnable foundation — implemented

- Marketing, legal, authentication, verification, and protected app routes.
- Display name, timezone, and adult-eligibility onboarding.
- Exchange, Archive, and You navigation with settings shells.
- Versioned schema foundation and default-deny protected data.
- Environment boundaries, health check, design-system specimen, and CI.

### Alpha 0.3: private-pair reveal — specified

- Email-bound, expiring, revocable invitation.
- Exactly one private Space and one active Exchange.
- Three edited prompts and a relationship-neutral Guide role.
- Private contribution drafting, autosave, review, lock, wait, and allowed withdrawal.
- Atomic mutual reveal under concurrent requests.

### Alpha 0.4: completion and archive — specified

- Coarse, nonjudgmental experience status.
- Private draft and explicit submission of one required reflection.
- Chapter completion, chronological archive, pause, and start-again path.
- Content-free lifecycle events and transactional notifications.

### Alpha 0.5: pilot readiness — specified

- Invite and authentication recovery; reminder deduplication and delivery monitoring.
- Lighter commitment, access difficulty, replacement, pause, leave, block, and report.
- Export, deletion, incident, moderation, backup/restore, and support procedures.
- Accessibility, authorization, concurrency, mobile, and failure QA.

## Core coordination rules

- A Space has no more than two active members.
- One active Exchange exists per Space.
- The Guide selects one prompt; the role alternates after completion.
- A member may retrieve their own draft and only the partner's coarse state before reveal.
- A lock commits an exact saved version.
- A lock may be withdrawn only while the partner remains unlocked.
- If a concurrent partner lock completes the gate, reveal wins and withdrawal fails.
- The second valid lock reveals both Contributions in one serialized transaction.
- Repeated or concurrent requests do not produce multiple reveals.
- An Exchange completes when both Responses are submitted, including an honest unable-to-finish state.

## User stories and acceptance criteria

### PR-01 — Access an account

As a member, I can sign up or sign in by email so my private Space is available across devices.

- Authentication is managed and passwordless.
- Account creation and returning-user sign in are distinct, and switching preserves only a safe product destination.
- A confirmed display name, timezone, and 18+ acknowledgment are stored.
- Destination and invitation context survive authentication safely.
- Invalid, expired, and absent codes have explicit recovery.
- Email addresses and auth tokens are excluded from product analytics.

### PR-02 — Invite one person

As an initiator, I can invite one person and explain why I am asking.

- The invitation is random, single-use, revocable, expires after 14 days, and is bound to the intended normalized email.
- A recipient can understand the ritual, time expectation, privacy boundary, and option to decline before authenticating.
- Tokens never enter analytics or ordinary logs.
- Correcting an email revokes and reissues rather than mutating the active token.
- Acceptance gives both people equal relationship permissions.

### PR-03 — Choose against a shared prompt

As the current Guide, I can select one of three curated prompts that gives both choices a shared purpose.

- The prompt applies symmetrically.
- Either person may request a lighter prompt before lock.
- Changing a prompt preserves drafts but requires review before lock.
- No new Exchange starts while another remains active.

### PR-04 — Draft and lock privately

As a member, I can prepare my Contribution over multiple sessions without exposing it.

- Type, title, commitment, and preface are required for lock.
- The interface distinguishes Saving, Saved, Offline, and Retry.
- Local recovery protects writing during transient failure.
- The partner receives only Choosing or Locked before reveal.
- No partner draft content appears in a response, payload, prefetch, log, or event.
- Lock is authenticated, authorized, versioned, idempotent, and forces the latest save.

### PR-05 — Reveal together

As a pair, we can see both Contributions only after both people commit.

- The second lock writes lock state and one reveal time in a serialized transaction.
- Both members receive equivalent access.
- Transaction failure leaves the Exchange sealed and safe to retry.
- Motion is skippable; reduced motion reveals immediately; assistive technology receives one concise announcement.

### PR-06 — Experience without surveillance

As a member, I can indicate where I am without proving completion.

- States are Not started, Started, Ready to respond, and Unable to continue.
- No percentage, page count, verification, public lateness, or streak exists.
- A member may ask for a lighter commitment, report access difficulty, request replacement, snooze, or pause without required explanation.

### PR-07 — Reflect and preserve a Chapter

As a member, I can capture what stayed with me and share it deliberately.

- Draft Responses remain private and autosave.
- Submission is explicit; the partner sees a Response only after submission.
- “What stayed with you?” and an honest completion state are required.
- A Chapter is created only after both submit.
- Completed Chapters remain available and chronological.

## Cross-cutting acceptance

- Mobile layouts support 320 CSS px without horizontal scrolling.
- Core journeys work by keyboard and meet WCAG 2.2 AA intent.
- Every consequential state answers: what happened, who acts next, whether work is safe, what can be done, and how to recover.
- Protected queries are denied unless a policy explicitly grants the current member access.
- Private prose and identifiers are not sent to general analytics.
- Every schema change is migration-backed and reproducibly typed.

## Open product questions

Public questions are tracked as issues and dated decisions. Business-model options, pricing, research participants, and investment thresholds are intentionally private.
