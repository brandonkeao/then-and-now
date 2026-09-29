---
title: Brand and product design standard
document_id: DS-001
status: historical reference; current palette reopened
version: 0.2.1
applies_to: Alpha 0.2+
owner: Product Design
visibility: public
last_reviewed: 2026-09-07
---

# Brand and Product Design Standard

> **September 7 historical direction:** [DS-002](iteration-2026-09-07.md) records Softbound as the then-selected Then & Now exploration and preserves separate personal/product marketing experiences. [DS-003: Softbound](softbound.md) preserves that palette, typography, and action treatment as a historical reference, superseding the earlier red/inverted-red proposals for that review. The September 21 product reset reopened the visual direction; no current palette is selected. The existing values below document the Alpha 0.2 baseline, and none of these records certifies runtime integration, a release, or a product-behavior change.

## What this standard does

A design system is a shared set of visual tokens, interaction contracts, components, content rules, and review criteria—not merely a component gallery. This raw standard records the reasoning and complete current contract. The implemented specimen at `/system` shows which portions are already real; unimplemented patterns remain specifications rather than claims.

## Design-system verdict

Adopt one reusable system called **Editorial Instrument** and let Then & Now use an **Intimate Archive** expression.

The system hierarchy is:

- **Brandon Keao master brand:** Judgment, systems thinking, editorial authority, and useful-building credibility.
- **Shared product system:** Typography, spacing, accessible color semantics, controls, interactions, data patterns, and implementation conventions.
- **Then & Now expression:** Product name, paired motif, cultural artifacts, privacy cues, and reveal behavior.

Use shared craft with distinct product expression, not a numerical brand ratio. The earlier 70/30 figure was an exploration heuristic, not a required design target. The personal website leads with the person's work; Then & Now has its own marketing story and primary product identity.

## Evidence base

The current [Brandon Keao site](https://brandonkeao.com/) uses:

- DM Serif Display, Source Serif 4, Inter, and system mono.
- Warm paper `#F2EEE6`, ink `#171713`, and rust `#B64E32`.
- Horizontal 32px rules, hard section divisions, sharp marketing geometry, numbered grids, and generous editorial spacing.
- Wide 1360–1440px containers, 660px prose, and 880px content measures.
- Restrained opacity transitions and reduced-motion handling.

The supplied CXO client screenshots demonstrate a useful application translation: sparse shell, thin rules, mono metadata, compact controls, restrained accents, and disciplined empty states. The public [CXO.dev](https://www.cxo.dev/) site is a design reference, not a source to copy.

## Ten-second brand reading

The Brandon master brand should read:

> An experienced builder who brings clarity and structure to complicated work.

Then & Now should read:

> A private, thoughtful place where two people trade something meaningful and preserve what they learned about each other.

It should not read as couples therapy, a social feed, a media tracker, or a gamified relationship score.

## Brand relationship

| Layer                 | Inherit                                                                     | Keep distinct                                                                     |
| --------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Brandon master brand  | Paper, ink, rust, serif authority, visible grids, direct voice              | Consulting navigation, BK lockup, buyer-oriented calls to action                  |
| Shared product system | Inter UI, Source Serif narrative, spacing, controls, states, data standards | Product nouns, accent expression, signature product objects                       |
| Then & Now            | Foundation tokens and interaction quality                                   | Wordmark, paired motif, rust/blue duality, sealed/reveal objects, Chapter archive |

Endorsement rules:

- Product name is primary inside the app.
- A quiet maker credit may appear in an appropriate footer/About location; it must not compete with the product task or primary identity.
- Do not place the BK mark beside the product wordmark in persistent app chrome.
- Do not bring `Experience`, `Writing`, or `Work with me` navigation into the app.
- Keep the product a secondary reference on the personal homepage, with its own dedicated marketing page. Do not place a competing product exhibit beside the personal hero.

The “common foundation, distinct expression” model is consistent with Carbon’s [ecosystem approach](https://preview.carbondesignsystem.com/getting-started/about-carbon).

## Visual territories

| Territory        | Character                                     | Strength                          | Risk                                                   |
| ---------------- | --------------------------------------------- | --------------------------------- | ------------------------------------------------------ |
| Editorial Grid   | Paper, serif display, rust, numbering, rules  | Authentic and differentiated      | Can become severe or brochure-like in forms            |
| Quiet Instrument | Compact sans UI, thin borders, sparse accents | Scales to products and data tools | Can become anonymous developer SaaS                    |
| Intimate Archive | Cultural objects, chronology, reveal, memory  | Emotionally appropriate           | Can drift into media tracking or sentimental scrapbook |

The earlier territory percentages were composition heuristics, not acceptance criteria. The September 7 Softbound selection is retained as historical reference: cornflower/paper marketing, Newsreader narrative, DM Sans controls, and butter primary actions. The September 21 reset reopened the product and visual direction, so no palette currently governs the next iteration. The older territory descriptions remain baseline history; see [the iteration record](iteration-2026-09-07.md).

## Design principles

1. **Structure creates the identity.** Use type, rhythm, grids, and object design—not gradients or effects.
2. **One screen, one decision.** The next action and who is waiting should be obvious.
3. **Editorial where meaning lives; utilitarian where work happens.** Prompts and reflections use serif; controls stay sans.
4. **Privacy is visible.** Explain who can see content and what causes reveal.
5. **Data is evidence, not decoration.** A chart answers a question and shows provenance.
6. **Color is earned.** Ink and paper do most of the work; one accent owns a screen.
7. **Delight belongs at consequential transitions.** Save expressive motion for mutual reveal and Chapter completion.
8. **The interface sounds experienced.** Plain nouns, active verbs, honest uncertainty.
9. **Equality is structural.** Both people receive equal weight; no gender-coded or primary/secondary treatment.
10. **No relationship scoring.** Internal coordination measures never become emotional judgments.

## Foundation tokens

### Color

| Token           |     Value | Use                                          |
| --------------- | --------: | -------------------------------------------- |
| `paper.canvas`  | `#F2EEE6` | Master canvas                                |
| `paper.surface` | `#FBF9F5` | Fields and contribution surfaces             |
| `paper.subtle`  | `#E9E2D7` | Secondary sections                           |
| `paper.accent`  | `#DED4C4` | Selected neutral surfaces                    |
| `ink.primary`   | `#171713` | Primary text and action                      |
| `ink.secondary` | `#34342F` | Supporting text                              |
| `ink.muted`     | `#69675F` | Meaningful metadata                          |
| `ink.faint`     | `#8F8A80` | Decorative only; never meaningful small text |
| `rust.brand`    | `#B64E32` | Large type, rules, fills, visual identity    |
| `rust.text`     | `#A9432C` | Accessible rust normal text                  |
| `now.blue`      | `#2056A8` | Focus, links, “Now,” informational state     |
| `then.tint`     | `#F0D9D1` | Quiet historical/archive surface             |
| `now.tint`      | `#DCE7F7` | Quiet current/action surface                 |
| `success`       | `#146847` | Completed state                              |
| `warning`       | `#875000` | Waiting and attention                        |
| `danger`        | `#A1272D` | Destructive and failure                      |
| `line.default`  | `#C8C0B4` | Structural separators                        |
| `line.subtle`   | `#DDD5CA` | Background rule and grouping                 |
| `line.control`  | `#8B867C` | Input/control boundary                       |
| `focus`         | `#2056A8` | 2px focus ring                               |

Accessibility correction: `#B64E32` on `#F2EEE6` is approximately 4.40:1 and just below the 4.5:1 normal-text threshold. `#8F8A80` is roughly 2.97:1. Preserve them as brand/decorative colors but use `rust.text` and `ink.muted` for meaningful small text. WCAG 2.2 requires 4.5:1 for normal text: [contrast minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

Use rust for “Then” and cobalt for “Now” only in the wordmark, temporal labels, archive/reveal composition, or selective data use. Never use those colors to distinguish people; names and initials do that.

### Semantic CSS example

```css
:root {
  --bk-paper-100: #f2eee6;
  --bk-ink-950: #171713;
  --bk-rust-600: #b64e32;
  --bk-rust-700: #a9432c;
  --bk-blue-700: #2056a8;

  --color-canvas: var(--bk-paper-100);
  --color-surface: #fbf9f5;
  --color-text: var(--bk-ink-950);
  --color-text-muted: #69675f;
  --color-text-accent: var(--bk-rust-700);
  --color-link: var(--bk-blue-700);
  --color-focus: var(--bk-blue-700);
}
```

Components consume semantic tokens, never raw hex values.

### Typography

- **DM Serif Display:** Marketing display, product wordmark, Chapter title, reveal headline. Never dense controls.
- **Source Serif 4:** Prompts, prefaces, responses, Chapter narrative, quotes.
- **Inter:** Navigation, controls, labels, fields, status, tables, help text.
- **System mono:** Timestamps, event IDs, invite codes, developer/data views. Do not turn the product into a terminal imitation.

Product scale:

| Role                    | Size / line height | Family                | Use                             |
| ----------------------- | -----------------: | --------------------- | ------------------------------- |
| Meta                    |            12 / 16 | Inter or mono         | Eyebrow, time, compact metadata |
| Compact UI              |            13 / 18 | Inter                 | Dense controls and table detail |
| UI body                 |            15 / 22 | Inter                 | Default product copy            |
| Narrative support       |            17 / 26 | Source Serif          | Preface and help narrative      |
| Object title            |            22 / 28 | Inter or Source Serif | Contribution title              |
| Page title              |            30 / 34 | DM Serif or Inter     | Page hierarchy                  |
| Product display compact |            48 / 48 | DM Serif              | Marketing and reveal            |
| Product display wide    |            64 / 62 | DM Serif              | Marketing hero only             |

Use tabular numerals for timestamps, metrics, and durations. Uppercase only short labels; never uppercase instructions or emotional copy.

### Spacing and layout

Base unit: 4px. Allowed working scale:

`4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128`

- Marketing maximum: 1360px.
- General app maximum: 1120px.
- Active ritual content: 760–880px.
- Paired reveal: up to 1120px.
- Prose: 660–720px.
- Auth and settings form: 420–480px.
- Gutters: 20px compact, 32px medium, 48px wide.
- Marketing: 12-column grid.
- Product: intrinsic grid around a 720px reading column and optional equal paired column.

Preserve the current 32px horizontal paper rule on marketing, archive, and Chapter views at very low contrast. Remove it behind dense fields, tables, dialogs, and error content.

### Borders, radii, and shadows

- Section/rule: 1px.
- Emphasis rule: 3–5px rust.
- Semantic object/card radius: 2px.
- Input/button radius: 4px maximum.
- Dialog/sheet radius: 8px.
- Full-radius pills only for real status or category chips.
- No permanent card shadow.
- Menu: `0 8px 24px rgba(23,23,19,.10)`.
- Dialog: `0 18px 48px rgba(23,23,19,.16)`.

Use dark borders for structural divisions, subtle lines for grouping, and `line.control` where the boundary itself must be perceivable.

### Iconography

- One consistent 1.5px stroke family at 16, 18, 20, and 24px.
- Icons reinforce text labels.
- Icon-only controls require universal meaning and an accessible name.
- Then & Now may use a custom paired motif: two equal forms, an offset pair, or two halves meeting at reveal.
- Avoid hearts, chain links, sparkles, brains, robots, wands, infinity symbols, and generic network-node diagrams.
- The BK mark remains a master-brand mark, not a product icon.

### Imagery

- Let real book covers and posters supply most saturated color after reveal.
- Preserve 2:3 book/film artwork ratio.
- Use 1.91:1 for web previews in future.
- Always show title, creator/source, and type independently from the image.
- Never send hidden artwork or metadata to the client before reveal; blur is not privacy.
- Empty states use typography, rules, and paired placeholders—not generic 3D or AI illustration.
- Full-bleed cultural imagery belongs to marketing and the reveal, taking selective inspiration from [MUBI](https://mubi.com/).

### Motion

| Role                   |                               Duration |
| ---------------------- | -------------------------------------: |
| Focus                  |                                    0ms |
| Press / frequent hover |                               70–100ms |
| Small enter / exit     |                                  150ms |
| Drawer / dialog        |                              200–250ms |
| Page transition        |                      300–400ms maximum |
| Mutual reveal          | 450–600ms, interruptible and skippable |

Animate opacity and transform rather than layout dimensions. Focus and screen-reader state change at animation start. Respect `prefers-reduced-motion`. [Atlassian’s motion guidance](https://atlassian.design/foundations/motion) is a useful behavioral reference.

## App shell

### Then & Now MVP

- 64px top bar.
- Product name/mark left.
- Current pair context in the page header.
- Exchange, Archive, and You as desktop navigation.
- Main content centered.
- Mobile top identity bar and bottom navigation.
- Optional sticky primary action during compose/reflection.
- No persistent left sidebar.

Add a relationship switcher only if multiple relationships become a real paid capability. Add a settings rail only when settings exceed four meaningful sections.

## Authentication and invitation pattern

The invitation page leads with human context:

> Maya invited you to trade one story.

Then show:

- Optional personal note.
- Compact mutual privacy and reveal explanation.
- Two sealed placeholders.
- Email sign-up or sign-in.
- An exact action: `Join Maya`, `Create account`, or `Email me a code`.
- Privacy statement and Brandon endorsement in the footer.

Do not ask for organization, logo, workspace, or slug. Do not use `Continue` when a concrete verb exists.

## Forms

- Stack fields vertically and keep labels visible.
- Never rely on placeholder text as a label.
- Use Source Serif for long reflective entry; labels, counters, and states remain Inter.
- Autosave drafts with a quiet `Saving`, `Saved`, `Offline`, or `Retry` state.
- Require server confirmation for lock, reveal, deletion, and invite revocation.
- Preserve content after errors.
- Explain missing input instead of silently disabling primary actions.
- Use field errors plus a focused summary for multi-field failures.
- Name buttons with object-specific verbs.

These conventions align with [Primer form guidance](https://primer.style/product/ui-patterns/forms/) and [GOV.UK error summaries](https://design-system.service.gov.uk/components/error-summary/).

## Settings pattern

Use one calm overview with:

- Profile.
- Relationship.
- Notifications.
- Accessibility.
- Privacy and data.
- Plan, only after a plan exists.
- Danger zone.

Export, leave relationship, block, revoke invite, delete content, and delete account must remain separate actions with separate explanations.

## Component inventory

### Shared core

- AppHeader, PageHeader, SectionHeader.
- Button, IconButton, TextLink.
- Input, Textarea, Select, Checkbox, Radio, Switch, FormField.
- Banner, InlineMessage, Toast, EmptyState, Skeleton.
- Dialog, ConfirmDialog, Sheet, Menu.
- Tabs, SegmentedControl, Breadcrumb.
- Avatar/Initials, StatusBadge, MetadataRow.
- List, DetailPanel, Timeline, DataTable.
- MediaPreview and source attribution.
- Metric, ChartFrame, ChartLegend, DataNote.

### Then & Now patterns

- PairIdentity.
- PromptPanel.
- ContributionComposer.
- SealedContribution.
- ParticipantStatus.
- MutualReveal.
- ExperienceCheck.
- MirroredReflectionForm.
- ChapterCard and ChapterTimeline.
- InvitePanel and WaitingPanel.

Avoid pages made of repeated generic cards. Every container has a role: prompt, contribution, state, Chapter, control group, or figure.

## Component state contract

Every interactive component must be specified in:

- Default.
- Hover, where applicable.
- Focus-visible.
- Active/pressed.
- Disabled with explanation when needed.
- Loading.
- Success/saved.
- Empty.
- Error.
- Offline/conflict where relevant.
- Reduced-motion behavior.

Every product state answers:

1. What happened?
2. Who acts next?
3. What can I do?
4. Is my work safe?
5. Can I recover?

## Data visualization standard

User-facing Then & Now data remains modest:

- Chronological Chapter timeline.
- Count of completed Exchanges.
- Cadence or artifact mix only when useful.
- No relationship health, compatibility, sentiment, or inferred closeness.

The operational analysis workspace may show:

- Invite → accept → first lock → second lock → reveal → response funnel.
- Median time between stages.
- Waiting-time distribution.
- Completion by prompt and artifact type.
- Reminder conversion.
- Second-Exchange cohorts.

Every figure includes:

- Question-based title.
- One-sentence takeaway.
- Timeframe, population, source, and update time.
- Direct labels where practical.
- Accessible text summary.
- Underlying table or export.
- No more than five series.
- Status never distinguished by color alone.
- Consistent axes and units.

References: [Carbon dashboard guidance](https://carbondesignsystem.com/data-visualization/dashboards/) and [USWDS data visualization](https://designsystem.digital.gov/components/data-visualizations/).

## Voice and copy

### Master voice

- Direct, evidence-led, practical.
- Verdict before abstraction.
- Concrete nouns and active verbs.
- Honest uncertainty.
- No self-congratulatory AI language.

### Then & Now voice

- Warm, restrained, specific.
- Invitational without sounding therapeutic.
- Use `for you`, `between you`, and `when both choices are in`.
- Explain privacy in ordinary language.

Use:

- “Choose one thing you want Maya to understand.”
- “Your choice stays private until Maya locks theirs.”
- “Both choices are in.”
- “Read your Chapter.”
- “This invitation expires on October 2.”

Avoid:

- “Unlock deeper connection.”
- “Supercharge your relationship.”
- “Embark on your journey.”
- “Magical AI insights.”
- “Continue.”
- “Something went wrong” without a recovery path.

[Vercel’s interface guidelines](https://vercel.com/design/guidelines) are a useful reference for naming actions, consistent terms, async status, and recoverable errors.

## Accessibility and responsive behavior

Target WCAG 2.2 AA:

- 4.5:1 normal text and 3:1 large text.
- 3:1 meaningful control boundaries and states.
- Visible 2px focus ring with offset.
- Logical source and tab order.
- Aim for 44px touch targets; never fall below WCAG’s 24px minimum without a documented exception. See [target-size guidance](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html).
- 16px minimum mobile input text.
- Keyboard-accessible menus, dialogs, tabs, and reveal.
- Correct dialog focus entry and return.
- Status expressed through text/icon/structure, never color alone.
- Reduced-motion equivalent.
- 200% zoom without lost content or page-level horizontal scrolling.
- Async status exposed without unexpectedly moving focus. See [status-message guidance](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html).
- Accurate local dates and screen-reader labels.
- Meaningful alt text for cultural artifacts; empty alt for decoration.

Responsive bands:

- Compact: under 640px.
- Medium: 640–1023px.
- Wide: 1024px and above.

Prefer container queries for paired views. At compact widths, stack contributions with explicit `You` and person-name headings. Never shrink a paired object until its content becomes unreadable.

## Reusable template kit

### Marketing

1. Master landing.
2. Product launch.
3. Product mechanism/detail.
4. Pricing or waitlist.
5. Case study/project.
6. Essay/editorial.
7. Directory/library.
8. Contact/conversion.

### Application

1. Standard sign-up/sign-in.
2. Invitation-aware auth.
3. Current-state home.
4. Focused create/compose.
5. Two-object compare/reveal.
6. Archive/timeline.
7. List/detail workspace.
8. Settings/privacy/plan.
9. Billing/upgrade.
10. Empty, expired, denied, offline, error, and maintenance.

### Data

1. Single-question overview.
2. Funnel/cohort analysis.
3. Annotated metric detail.
4. Searchable data table.
5. Narrative report with figures.

## Implementation conventions

- Separate primitive, semantic, and product-theme tokens.
- Components never contain raw colors.
- Map semantic CSS variables into both Astro and Next.js.
- Use a headless behavior library only; do not inherit its default visual theme.
- Avoid arbitrary spacing and radii in shipped components.
- Prefer native semantic HTML.
- Persist meaningful navigation and filters in URLs.
- Add a private `/system` specimen route before component count grows.
- Document components and lifecycle patterns, not only atoms.
- Test representative screens at 390, 768, 1280, and 1440px.
- Add automated contrast, axe, and keyboard checks.
- Lint against raw colors and unauthorized spacing values.
- Give coding agents the token reference, component allowlist, state contract, and anti-pattern list.
- Defer dark mode until both themes are fully designed and tested.

## Anti-template test

Reject a generated screen if it contains:

- Purple/cyan gradients.
- Glass panels or glowing borders.
- 12–16px rounding everywhere.
- A page made entirely of equal cards.
- Decorative KPI tiles without a user decision.
- Sparkle, brain, robot, or wand imagery.
- Three identical feature cards.
- Icon-only navigation without labels.
- Pills used as decoration.
- Generic empty-state illustration.
- Whitespace without a deliberate grid relationship.
- Copy such as “unlock,” “effortlessly,” “powerful insights,” or “revolutionize.”
- A default dark Linear clone.
- A default white/gray shadcn dashboard.

Remove the product name. If the screen could belong to any AI SaaS template, it fails.

## Reference map

| Reference                                                                | Take                                                                    | Do not copy                                                           |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [Brandon Keao](https://brandonkeao.com/)                                 | Paper/ink/rust, type trio, visible structure, direct language           | Marketing-scale typography and zero-radius severity in every control  |
| [CXO.dev](https://www.cxo.dev/)                                          | Marketing-to-product continuity, restraint, technical scaffolding       | Terminal syntax, black/yellow/purple identity, logo language          |
| Supplied CXO client screens                                              | Sparse shell, thin separators, contained auth, disciplined empty states | Organization setup, enterprise rail, workspace vocabulary, `Continue` |
| [Are.na](https://www.are.na/)                                            | Calm object-first interface, collaboration, content-led confidence      | Blue identity and encyclopedia composition wholesale                  |
| [StoryGraph](https://thestorygraph.com/)                                 | Gated visibility and low-pressure reading coordination                  | Tracking breadth, challenges, badges, green/purple identity           |
| [Letterboxd](https://letterboxd.com/about/faq/)                          | Diary/archive, cultural art as interface color, durable history         | Ratings, public feed, follower mechanics, poster-wall density         |
| [MUBI](https://mubi.com/)                                                | Cultural point of view and selective full-bleed imagery                 | Full-screen video and intensity in routine workflows                  |
| [Linear](https://linear.app/)                                            | Compact hierarchy and clear object states                               | Issue-tracker density and dark-gradient theater                       |
| [Attio](https://attio.com/)                                              | Object/list/detail composition                                          | CRM conventions and decorative data density                           |
| [Geist](https://vercel.com/geist/introduction)                           | Token rigor, contrast, grid, component states                           | Vercel black/white identity                                           |
| [Primer](https://primer.style/product/getting-started/)                  | Accessible behavior, forms, responsive navigation                       | GitHub density and icon identity                                      |
| [Carbon](https://carbondesignsystem.com/)                                | Data hierarchy and ecosystem thinking                                   | Enterprise dashboard structure and blue identity                      |
| [GOV.UK](https://design-system.service.gov.uk/components/error-summary/) | Error clarity, focus management, recovery                               | Government visual styling                                             |

## Design review checklist

### Brand

- Does the screen feel related to Brandon’s site without looking subordinate to it?
- Is distinction coming from typography, structure, and object behavior?
- Is the product warmer than a client workspace without becoming sentimental?

### Product clarity

- Can a person identify the current Exchange state in five seconds?
- Is one primary action obvious?
- Is privacy explained where it matters?
- Are both people structurally equal?
- Does the screen avoid project-management language?

### Interaction

- Are default, hover, focus, active, loading, disabled, success, error, offline, and conflict states defined?
- Can the person recover without contacting Brandon?
- Do animations communicate a transition rather than decorate it?

### Accessibility

- Does normal text meet 4.5:1?
- Is every action keyboard accessible with visible focus?
- Do status and errors work without color?
- Does the layout work at 320px, 200% zoom, and reduced motion?

### Reuse

- Is the pattern a stable shared primitive or a Then & Now-specific ritual object?
- Does the component use semantic tokens?
- Would extraction improve reuse now, or create premature abstraction?

### Anti-AI quality

- Would the design still be recognizable without the logo?
- Are containers semantically different rather than generic cards?
- Is every decorative element earning its place?
- Has the interface avoided template copy, gradients, excessive rounding, and dashboard filler?

## Open design gates

1. Confirm or replace the working name before hardening the temporal motif.
2. Test whether invited people understand the sealed-pair metaphor without explanation.
3. Validate top navigation versus a very light desktop side rail after real settings breadth exists.
4. Confirm the first product wordmark and paired motif.
5. Perform device-based mobile visual QA.
6. Review actual cultural-cover treatment for copyright, consistency, and privacy.
