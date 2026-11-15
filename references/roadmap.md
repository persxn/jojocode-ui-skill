# Roadmap: how a JojoCode build is sequenced

The order JojoCode was built in, generalised. It works because each layer is finished before
anything depends on it, and the surfaces customers see first get the most polish.

## Order

| # | Package | Done when |
|---|---|---|
| 00 | Recon: every route, API and data source written down | an inventory any later package can trust |
| 00b | Mock data: every surface has something real-shaped to show | captures never touch real users |
| 01 | Tokens and theming: modes × accents × performance tiers | kit tokens in the codebase's token layer; no hex outside it |
| 02 | Motion system: durations, curves, bloom, orb, burst | one feel; reduced motion defined once, globally |
| 03 | Primitives and a design lab page | buttons, inputs, chips, segmented, switch, dialog, sheet, toast, every state pinned on one page |
| 04 | Shell and navigation | bar, sidebar, phone nav, command palette |
| 05… | Surfaces, in the order customers meet them | each package rebuilds layout and hierarchy, not just colours |
| n−2 | Product page and the demo funnel | the best surface in the product |
| n−1 | Motion everywhere | every interaction and changed value has its transition |
| n | Whole-product pass, then hardening | edge data, a11y, performance, docs |

For a single website: 01–03 collapse into "drop in the kit", then one package per page.

## Every package

1. **Brief** (only what is specific): routes, the archetype, the references, acceptance.
2. **Plan** before code: scope, files, data used, risks, open questions. Batch questions to the owner
   once; build what does not depend on the answers.
3. **Before** captures at 390 and 1440 in each mode.
4. **Build** in three to six slices, each leaving the tree green. Rebuild, don't reskin: a page that
   reads as the old one restyled is not done.
5. **Verify** each slice: typecheck, CSS check, tests, a logic grep proving no business logic moved.
6. **Self-review** against the archetype and the references; every interaction has its transition.
7. **Depth review** by a fresh reviewer (≥ 5 improvements applied or answered).
8. **Matrix**: 360 · 390 · 768 · 1024 · 1440 · 1920 × modes × two accents, reduced motion, keyboard, axe.
9. **Code review**, then a "is every line needed" review.
10. **Close**: handoff (what shipped, what was deferred and why), log, state, one commit.

## Writing a package brief

```md
# P-nn — <what a user sees when it is done>
**Depends on:** … · **Archetype:** … · **References:** …
## Routes (role to capture as)
## Goal
## Notes (claims that need the owner, data that does not exist yet)
## Acceptance
- [ ] Captured before and after, phone and desktop, every mode
- [ ] Scorecard pass mark held (review-rubric.md)
- [ ] Depth review applied (≥ 5)
```
