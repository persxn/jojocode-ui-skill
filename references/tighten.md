# Tightening passes

Run them in this order; each one makes the next cheaper. The method for each is in craft.md; the
skill names in brackets are optional deeper reading if installed. Report every change as a
`| Before | After | Why |` table.

1. **Subtract** (`audit-ai-design-slop`, `remove-animations`, impeccable `distill`). Remove repeated
   CTAs and notes, cards around things that are not objects, decorative layers that duplicate a
   job, motion on repeated actions. Default to deletion.
2. **Hierarchy** (`visual-hierarchy`, impeccable `layout`). One entry point per view: make it larger,
   give it the clay or the bloom, and quiet its neighbours (muted ink, smaller, fewer borders).
   Turn a run of equal cards into a lead item plus supporting items, or into columns with hairlines.
3. **Palette** (`better-colors`, impeccable `colorize`). One accent per view. Light mode: pastel
   fills, same-hue inks that pass AA, near-white glass, nothing grey and flat. Dark: lift the base
   with a trace of the accent, keep text off pure white. Semantic colours only for meaning.
4. **Type** (`better-typography`, impeccable `typeset`). Snap every size to the kit scale; four
   levels per view; tighten tracking on large type (−0.02 to −0.035em); `balance` headings,
   `pretty` paragraphs; tabular figures on all numbers; break hero lines where the thought breaks.
5. **Space and alignment** (`spacing-system`, `better-layout`, `better-ui`). Snap to the 8-point
   scale; nested radius = outer − gap; optical alignment of icons; equal-height rows in grids;
   section rhythm 64 / 96.
6. **Depth and glow** (the language file). Glass highlight on every glass surface; one bloom per
   region, behind the most important object, still unless it is the region's one ambient effect.
7. **Motion** (`emil-design-eng`, `choreograph`, `find-animation-opportunities`). Every changed value
   moves (count rolls, cross-fades, arriving rows); presses squish; arrivals use the spring; groups
   stagger 30–80 ms; nothing repeated animates; reduced motion keeps a fade.
8. **Copy** (`better-writing`, `interfaces-that-feel`). Specific verbs, the product's voice, calm
   system messages, empty states that invite.
9. **Edge states** (`break-ui`, impeccable `harden`). Long names, zero, 10 000+, slow network, the
   feature switched off, the session expired.

## Moves that raise a "competent" page to "the best surface"

- Put the real product in the hero, running, instead of describing it.
- Give the one number that matters a roll-up and a tabular display size.
- Replace a third card row with an editorial layout (sticky head on one side, content on the other).
- Let one sentence be huge (the tagline reveal) and let everything around it be quiet.
- Make the last call to action as rich as the first: the same button, a bloom, one reassure line.
- In gamer mode, spend the one display moment on the hero's accent line.
