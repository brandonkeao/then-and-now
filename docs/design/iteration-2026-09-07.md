---
title: Design iteration — selected direction and implementation boundary
document_id: DS-002
status: historical September 7 direction; superseded/reopened by current product review
version: 0.2.0
applies_to: Next design iteration after the Alpha 0.2 baseline
owner: Product Design
visibility: public
last_reviewed: 2026-09-07
---

# September 7 Softbound direction (historical)

A design review can select a visual direction before every component is specified or implemented. Keeping those states separate prevents a prototype from becoming an accidental product promise. This record explains the selected direction and the work still needed to translate it into the application.

## What the September 7 review selected: Softbound

The September 7 review selected **Softbound**: cornflower blue, ink text, butter primary actions, and paper reading surfaces. Newsreader 400 carries headings and recollections; DM Sans carries body text, controls, and forms. It superseded the earlier red/inverted-red product direction for that review. The maker's personal website retains red Editorial Keepsake. The [Softbound specification](softbound.md) records those historical values and component rules; it does not claim they were integrated into the Alpha application. The September 21 product reset reopened the product and visual direction, so no current palette is selected.

The maker's personal website and Then & Now marketing have separate purposes:

| Surface           | Primary story                                                | Relationship to the other property                             |
| ----------------- | ------------------------------------------------------------ | -------------------------------------------------------------- |
| Personal website  | The person's work, experience, and professional contribution | A secondary product/project link, not a competing product hero |
| Product marketing | The user's experience and the value of a shared record       | A quiet maker credit and related visual craft                  |
| Application       | The current task, participant state, and next useful action  | Product identity is primary; no personal-portfolio navigation  |

Cornflower is a marketing surface, with ink foreground and butter primary actions; the app uses quieter blue-wash and paper surfaces. Shared spacing discipline, readable narrative, thin rules, and interaction quality connect the properties without requiring identical palettes, typefaces, layouts, or a numerical shared-brand percentage.

## Current boundary

The September 21 reset reopens the product, brand, and design-system direction. This record remains public historical evidence of the September 7 Softbound exploration; it is not the current palette or an implementation mandate.

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
