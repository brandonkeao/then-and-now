---
title: Design iteration — selected direction and implementation boundary
document_id: DS-002
status: accepted direction; detailed specification and implementation pending
version: 0.1.0
applies_to: Next design iteration after the Alpha 0.2 baseline
owner: Product Design
visibility: public
last_reviewed: 2026-09-07
---

# Evolving a design system without rewriting product behavior

A design review can select a visual direction before every component is specified or implemented. Keeping those states separate prevents a prototype from becoming an accidental product promise. This record explains the selected direction and the work still needed to translate it into the application.

## Selected direction: Editorial Keepsake

The next iteration preserves warm paper, dark ink, bold red, editorial display typography, and readable narrative surfaces. Marketing can be expressive; authentication, settings, and writing tasks need calmer hierarchy and clear controls. Detailed typography and token revisions remain subject to review.

The maker's personal website and Then & Now marketing have separate purposes:

| Surface           | Primary story                                                | Relationship to the other property                             |
| ----------------- | ------------------------------------------------------------ | -------------------------------------------------------------- |
| Personal website  | The person's work, experience, and professional contribution | A secondary product/project link, not a competing product hero |
| Product marketing | The user's experience and the value of a shared record       | A quiet maker credit and related visual craft                  |
| Application       | The current task, participant state, and next useful action  | Product identity is primary; no personal-portfolio navigation  |

An inverted red/paper treatment is a design approach being developed for product marketing. Shared typography, spacing, rules, and interaction quality connect the properties without requiring identical layouts or a numerical shared-brand percentage.

## What this does not change

This is not a change to contribution ownership, visibility, mutual reveal, completion, privacy, or the product's relationship model. The [PRD](../product/product-requirements.md), [UX specification](../product/ux-information-architecture.md), [technical requirements](../engineering/technical-requirements.md), and [reveal ADR](../decisions/0002-mutual-reveal-is-a-database-gate.md) remain the behavioral contract until explicitly revised.

The Alpha 0.2 application remains the implemented foundation described in the [README](../../README.md). A separate synthetic design specimen is not evidence of real account creation, email delivery, invitations, participant consent, shared persistence, database isolation, or a complete Exchange. No new runtime feature or release certification is claimed by this document.

## How the selected direction becomes implementation

1. Review one realistic journey using the same fictional content across relevant states.
2. Record visual preferences separately from functional defects and product decisions.
3. Specify the selected tokens and lifecycle patterns in the [raw design standard](design-system.md), including focus, responsive behavior, errors, and recovery.
4. Implement those changes as bounded components/routes, without silently changing authorization or product behavior.
5. Verify the real application against the updated contract and record the release evidence.

Useful review checks include 320/390/900/1440 CSS-pixel reflow, keyboard navigation, form state, save/visibility language, and the readability of the eventual shared record. A functional check should be marked passed, failed, not run, or not testable in the available environment. A design preference is not a test failure, and an unavailable backend claim must not be marked passed because a fixture looks convincing.

## Publication and evidence boundary

This public record exposes the development method and selected design direction. Private critique, raw recordings, research participants, career/case evidence, business strategy, and monetization remain outside the public repository. Specimens use fictional participants; no real relationship content belongs in testing artifacts.
