---
name: jojocode-ui-skill
description: A complete, standalone system for designing and building a product's website or app UI in the JojoCode style, end to end — analysing what the user asks for, choosing layouts and writing a build roadmap, building on a portable kit (glass, recess and clay surfaces, one accent hue driving light, dark and gamer modes, a calm premium motion vocabulary), then reviewing with a scored rubric and tightening palette, visual hierarchy, typography, spacing and motion until it passes. Use it whenever someone wants a landing page, product page, marketing site, dashboard, app screen or design system that looks premium and polished, wants something "like JojoCode" or "like an Apple product", wants to reuse one product's look for another, asks to plan or roadmap a website build, or asks for a full design-and-build or redesign pass rather than a one-line fix — even if they never say "JojoCode".
---

# JojoCode UI skill

A product goes from "here is what I want" to a shipped, reviewed, tight interface that feels like
JojoCode: calm, premium, honest, and alive where it matters. Everything needed is inside this
folder: the playbooks, the design language, the layouts, a portable CSS kit, a working product-page
template, and scripts to screenshot and measure the result.

The JojoCode look is a **system**, not a skin: one accent hue drives every colour; three modes share
one set of components; each surface style has one job; motion only ever answers *did it hear me*,
*is it working* or *what happened*. Reproducing it for another product means re-tinting and
re-composing that system around the new product's truth, never copying JojoCode's content or claims.

## Files

| File | Read it when |
|---|---|
| [references/intake.md](references/intake.md) | Phase 1: turning the request into a product brief |
| [references/jojo-design-language.md](references/jojo-design-language.md) | Phase 2, and whenever a visual choice is unclear |
| [references/surface-archetypes.md](references/surface-archetypes.md) | Phase 3: picking and adapting a layout |
| [references/roadmap.md](references/roadmap.md) | Phase 3: anything bigger than one page |
| [references/craft.md](references/craft.md) | Phases 3–7: the playbooks (modes, conversion, copy, hierarchy, colour, type, motion, states, a11y, responsive, anti-slop, gates) |
| [references/review-rubric.md](references/review-rubric.md) | Phase 5: the scorecard and the known traps |
| [references/tighten.md](references/tighten.md) | Phase 6: the tightening passes |
| [references/lineage.md](references/lineage.md) | Optional: where the ideas come from; how conflicts were resolved |
| [assets/jojo-kit.css](assets/jojo-kit.css) | Phase 4: tokens and recipes |
| [assets/product-page.html](assets/product-page.html) | Phase 4: a working product page to start from |
| [assets/kit-gallery.html](assets/kit-gallery.html) | To see every recipe in every mode and accent |
| [scripts/capture.mjs](scripts/capture.mjs) | Phases 5 and 7: screenshots at every size and mode |
| [scripts/contrast.mjs](scripts/contrast.mjs) | Phases 2, 5, 7: measured WCAG contrast |

**Size the run to the request.** One section → Phases 4–6 on that section. A new page → every phase,
lightly. A new product → every phase fully, with the roadmap.

## Phase 0 — Facts and mode (never skipped)

1. **What is real.** List what the user gave you: facts, numbers, names, assets, an existing
   codebase. Everything else is `{{placeholder}}`. Never invent a number, testimonial, logo or claim.
2. **The surface's mode** (craft §1): Persuade, Operate, Read or Experience. It sets how loud every
   later choice is.
3. **The stack.** An existing codebase's conventions win: inspect its tokens, components and routing
   first and port the kit into its token layer. Greenfield: plain HTML/CSS/JS on the kit, or the
   framework the user names.

## Phase 1 — Analyse the demands

Follow intake.md: one batch of only the missing questions (or stated assumptions if the user wants
none), vague words translated into concrete dials, and a written **product brief**.

## Phase 2 — Direction

From the design language, decide and write down before any layout: the **accent hue** (from the
brand, or the temperament table), which **modes** ship (light always; dark usually; gamer only for
playful audiences), the **type** (Geist + mono; a display face only if the brand needs it), and the
**motion temperament** (crisp for Operate, weighted for Persuade, gentle for Read). Check the hue
against semantic colours, then measure its inks: `node scripts/contrast.mjs "#5b3fd9" "#f5f4fc"`.

## Phase 3 — Layout and roadmap

Pick an archetype per surface (surface-archetypes.md) and write the section order, what each
section proves or does, and the one thing the eye lands on first. Hold everywhere: one primary
action per view, size equals importance, proof beside the claim, 8-point rhythm, 680 px measure for
heroes and ledes, the primary action visible in the first screen at 390 px. For more than one page,
write the roadmap (roadmap.md): foundations, then surfaces in the order customers meet them, then a
motion sweep, then hardening.

## Phase 4 — Build on the kit

- Link or port `assets/jojo-kit.css`; set `--ac-hue` (and `--ac-light` / `--ac-dark`) for the
  product. For a product page, copy `assets/product-page.html` and replace every piece of content.
- Build section by section, each slice leaving the page working, with the smallest code that does it.
- Keep each surface to its job: aurora is backdrop, glass is surface, recess holds inputs, tracks and
  status chips, clay is only the primary action and the active state.
- Every interactive element ships its full state set (craft §9); every changed value moves with the
  kit's vocabulary, decided by craft §7.

## Phase 5 — Review with the scorecard

Capture: `node scripts/capture.mjs --url <page> --out shots --modes light,dark --sizes 390x844,1440x900`
(it scrolls first so reveals render). **Look at every image.** Score each lens of review-rubric.md
0–4 with evidence and walk its trap list. When subagents exist, a fresh one that did not build the
page does the scoring. Pass mark: no lens below 3; the mode lens at 4.

## Phase 6 — Tighten

Run tighten.md's passes in order (subtract → hierarchy → palette → type → space → depth → motion →
copy → edge states). Report as a `| Before | After | Why |` table. Re-capture, re-score. Stop when
the pass mark holds and a round changes nothing visible, or after three rounds, saying what remains.

## Phase 7 — Verify and hand over

Capture the matrix (`--sizes matrix`, every shipped mode, `--reduced-motion`), check no horizontal
scroll at 390 and no console errors (both reported by capture.mjs), walk the primary flow by
keyboard, measure contrast of every text/background pair you introduced. Hand over: what shipped,
the scorecard before and after, the placeholders the owner must fill, and the next roadmap step.

## When rules disagree

The user's explicit instruction → the product's own brief and design docs → the design language →
the playbooks. Resolutions already made (lineage.md): the aurora stays as backdrop but cards never
get gradients; gradient text only on the wordmark and gamer display moments; UI feedback under
300 ms while marketing reveals may run 600–800 ms; bold ambition on Persuade surfaces, quiet
precision on Operate.

## Never

Invent proof, copy a real brand's name or look, or reuse JojoCode's own content for another product ·
clay on labels, neumorphism on text or cards, hard uniform glows, rainbow or neon text, meaning by
colour alone · animate anything but transform, opacity and filter, animate keyboard-repeated actions,
or let reduced motion lose information · hand over without having looked at the rendered result.
