---
title: Softbound product expression
document_id: DS-003
status: historical September 7 specification; superseded/reopened by current product review
version: 0.1.0
applies_to: Next design iteration after Alpha 0.2
owner: Product Design
visibility: public
last_reviewed: 2026-09-07
---

# Softbound: a distinct September 7 product expression

A product expression translates brand intent into reusable visual rules. This historical specification preserves the September 7 review’s Softbound exploration: narrative warmth without making routine controls feel like a magazine. It keeps the design details reproducible as reference material without claiming current adoption.

The September 7 review selected Softbound for Then & Now and superseded the earlier product red/inverted-red proposals. The maker's personal site retains its own identity; only quiet cross-links and shared interaction craft connect the properties. The September 21 product reset reopened the product and visual direction, so no current palette is selected. The [iteration record](iteration-2026-09-07.md) explains the historical decision and the [baseline standard](design-system.md) records the Alpha 0.2 implementation context.

## Color tokens

| Role            | Value     | Application                                   |
| --------------- | --------- | --------------------------------------------- |
| Cornflower      | `#91A7CD` | Marketing hero; restrained app brand surfaces |
| Ink             | `#24314F` | Primary text, action borders, focus ring      |
| Butter          | `#F2DCA6` | Primary action fill                           |
| Butter hover    | `#E8CF93` | Primary action hover                          |
| Paper           | `#FAF7F0` | Reading, cards, inputs                        |
| Blue wash       | `#ECF0F8` | App canvas and secondary panels               |
| Muted ink       | `#4C5972` | Supporting text on paper or wash              |
| Accent ink      | `#415F90` | Links and active rules on light surfaces      |
| Separator       | `#A5AEC0` | Nonessential borders                          |
| Soft separator  | `#CCD3E0` | Inner rules, minimal decorative offsets       |
| Control outline | `#65738D` | Inputs and outlined secondary controls        |

Use ink, not white, on cornflower. Do not use cornflower as small-text foreground on paper. Selected-pair contrast is approximately 5.29:1 for ink/cornflower, 9.56:1 for ink/butter, and 12.06:1 for ink/paper. These calculations cover only those pairs, not comprehensive accessibility conformance. Semantic error, warning, and success patterns must remain distinguishable through words/icons as well as color; butter is not a success indicator. Color does not assign either participant a different status or importance.

## Typography and components

- **Newsreader 400:** wordmark, headings, prompts, authored recollections. Upright hero, optical sizing enabled, no synthetic bold or italic required.
- **DM Sans 400/500:** body, navigation, metadata, labels, buttons, and input/textarea text. Writing controls remain ordinary sans-serif even when the resulting memory is displayed in serif.
- Marketing hero: 44–80px desktop and 39–62px responsive, approximately 1.12 line-height and −0.012em tracking. App headings: 32–42px. Chapter heading: 36–52px.
- Narrative memories: approximately 21–22px/1.5; body 16–17px; inputs at least 16px; secondary metadata 13px. Reflow and larger text must remain legible.
- Primary action: butter fill, ink text, 1px ink border, 4px radius, minimum 46px height. Hover uses the warmer butter. No dark-filled default primary button.
- Secondary action: transparent fill and visible control outline. Quiet actions use an underline; never rely on color alone for affordance.
- Focus: visible 3px ink outline with 4px offset. Check it against actual adjacent surfaces, including dialogs, the hero, and action fills.
- Surfaces: blue marketing cover, paper long-form reading, quiet blue-wash app canvas. Cards use restrained borders/radius and little shadow. Preserve the existing responsive structure and reduced-motion support.

References: [Newsreader by Production Type](https://productiontype.com/font/newsreader), [Newsreader source/license](https://github.com/productiontype/Newsreader), and [DM Sans](https://fonts.google.com/specimen/DM+Sans). Before production integration, verify font files and license notices, loading/fallback behavior, and delivery/privacy choices. Preview font loading does not settle production hosting.

## Implementation boundary and acceptance

The historical expression was applied to a separate synthetic review, not the public Alpha runtime. Any future implementation would require a dedicated, separately authorized slice after the current visual direction is selected; it would then need tests for auth, navigation, settings, forms, dialogs, empty/error/disabled/recovery states, and readable Chapters at 320/390/900/1440 CSS pixels. Check keyboard focus, reflow, font fallback and loading, state continuity, and semantic contrast rather than treating a palette calculation as full accessibility certification.

The [PRD](../product/product-requirements.md), [UX specification](../product/ux-information-architecture.md), and [technical requirements](../engineering/technical-requirements.md) continue to govern behavior and data access. This visual selection does not approve new features, external data sharing, revised reveal rules, account functionality, or a production release.
