# The scorecard

Render first (390 and 1440, every shipped mode; full-page shots need a scroll pass so
reveal-on-scroll sections render). Look at every image. Score each lens 0–4 with evidence
(image + region, or file:line). Separate making from judging: a fresh reviewer scores when one is
available.

**0** broken · **1** works but reads as a template · **2** competent, generic · **3** good, coherent,
specific to the product · **4** the best surface the product has; nothing to subtract.

**Pass mark:** no lens below 3, and the mode lens at 4.

| Lens | Asks | Playbook (deeper skill, if installed) |
|---|---|---|
| Mode lens — Persuade | One offer, one action above the fold; proof beside each claim; objections answered; final CTA identical to the first | craft §2 (`landing-page-design` A4, A8) |
| Mode lens — Operate | The task is findable in 3 s; scanable; consistent; no ornament competing with data | craft §1, §4 (`critique-information-density`) |
| Mode lens — Read | Measure 60–75ch; structure visible; nothing pulls the eye from the text | craft §1, §6 (`critique-typography`) |
| Hierarchy | Where the eye lands first is the most important thing; size = importance; one loud element per view | craft §4 (`critique-visual-hierarchy`, `visual-hierarchy`) |
| Density and grouping | Related things together, unrelated apart; spacing groups before borders do; no wall of equal cards | craft §4 (`critique-information-density`, `better-layout`) |
| Typography | Four levels max; tabular numbers; balanced headings; no orphans; no off-scale sizes | craft §6 (`critique-typography`, `better-typography`) |
| Colour | One accent; semantic colours only for meaning; AA measured; light mode soft not grey; dark not muddy | craft §5 (`critique-color`, `better-colors`) |
| Surfaces | Each style does its one job (aurora, glass, recess, clay); no clay on labels; no hard glows | jojo-design-language (the language file, `better-ui`) |
| Motion | Every animation answers did-it-hear-me / is-it-working / what-happened; transform/opacity only; reduced motion keeps information; interruptible | craft §7, §8 (`review-animations`, `emil-design-eng`) |
| Copy | Specific, the product's voice, verbs on buttons, no hype words, no invented claims | craft §3 (`better-writing`, `audit-ai-design-slop`) |
| States | Hover, active, focus, loading, empty, error, disabled-with-reason all designed | craft §9 (`loading-states`, `error-handling-ux`) |
| Accessibility | Focus visible everywhere; 44 px targets on touch; names and roles; keyboard flow; dialogs trap and return focus | craft §10 (`accessibility-audit`, `better-accessibility`) |
| Responsive | 360–1920 without horizontal scroll; the primary action in the first phone screen; nothing covers working controls | craft §11 (`responsive-craft`) |
| Slop | The removal test on every decorative layer and repeated card; fake proof | craft §12 (`audit-ai-design-slop`) |

## Traps JojoCode builds have fallen into (check these every time)

- **Fixed inside a filter.** A `position: fixed` dialog rendered inside an element with `transform`,
  `translate`, `filter` or `backdrop-filter` (a glass bar) is positioned against that element, not
  the viewport. Portal dialogs to `body`.
- **Stacking contexts.** A `z-index` on `main` puts every modal inside it under the bar. Keep main
  unstacked; give overlays named z tokens.
- **Sideways scroll at 390.** A bloom pseudo-element with negative inset overflows; clip
  `overflow-x` on the page wrapper and keep blooms inside the gutter on phones.
- **Small hand-made controls.** Kit buttons grow on coarse pointers; one-off pills do not. Any
  control a thumb reaches is ≥ 44 px under `(pointer: coarse)`.
- **Clay on status.** A badge or count in clay reads as a button. Status chips are recess.
- **Server open, client folds.** A panel whose default depends on viewport or storage renders open
  on the server and jumps on hydration. Render the neutral state until mounted.
- **Random ids.** `Math.random()` ids differ between server and client; use the framework's id hook.
- **Reduced motion in page CSS.** A page's own entrance keyframes need the reduced-motion
  treatment (fade only) unless a global guard provably covers them; check `data-motion` overrides too.
- **Kill switches.** When a feature is switched off, every piece of copy that describes it goes too
  (FAQ answers, nav links, duplicate fallbacks).
- **Over-applied copy rules.** "No hyphens" means no dash-joined filler, not "read only" for
  "read-only" or "twenty five". Correct English wins.
- **Numbers that jiggle.** Tabular figures must apply wherever the number lives, not only inside one
  page's wrapper.
- **Rebuilt but not redesigned.** Before and after side by side: if the after is the before with new
  colours, the surface is not done.

## Report

```md
| Lens | Score | Evidence | Fix |
|---|---|---|---|
```
Then the single change that would raise the lowest score most.
