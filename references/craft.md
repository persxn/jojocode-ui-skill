# Craft playbooks

Everything this skill needs from the wider design-skill world, condensed and rewritten so the skill
works on its own. Read the playbook for the phase you are in. (Lineage and optional deeper skills:
[lineage.md](lineage.md).)

## Contents
1. Surface modes · 2. Pages that convert · 3. Copy and voice · 4. Hierarchy and layout ·
5. Colour · 6. Typography · 7. Motion decisions · 8. Choreography · 9. States ·
10. Accessibility · 11. Responsive forks · 12. The removal test (anti-slop) · 13. Verification gates

---

## 1. Surface modes

Name what success looks like for the visitor on *this* surface, then let it set how loud you are.

| Mode | Visitor succeeds when they… | Ambition shows as |
|---|---|---|
| Persuade | decide and act | a point of view: the real product in the hero, one rich moment, bold type |
| Operate | finish a task | precision: scanable rows, consistent controls, brand in small details |
| Read | understand | structure and a comfortable measure; nothing pulls the eye off the text |
| Experience | are inside the work | the artefact leads; the interface recedes |

Choose by surface, not product: a developer tool's landing page is Persuade; its settings are Operate.
Refinement keeps the incumbent identity and copy; a redesign keeps product truth and function but
treats the old look as an anti-reference — never split the difference.

## 2. Pages that convert

One offer → one audience → one primary action. Above the fold: a headline (outcome + audience), a
subheadline (how, specifically), the primary CTA (verb + what they get), one proof signal, the hero
visual (the real product). Mid page: problem → solution, three to five outcome benefits, how it
works in three steps, proof beside the claims. Bottom: FAQ (six to twelve real questions), risk
reversal (no sign-up, free, cancel anytime — only what is true), the final CTA identical to the top.
Plus one large tagline moment of its own, further down.

Rules: no competing CTAs above the fold; be specific ("from 4 hours to 15 minutes", not
"streamline"); proof next to the claim it supports; mobile keeps the primary action in the first
screen. Index evergreen pages with a real title and description; no-index ad-only pages.

## 3. Copy and voice

Sentence case. Verbs on buttons ("Run", "Start the demo", "Book a call"). Contractions. Specific
over clever. Errors say what failed and what to do next; confirmations are calm and specific
("Invoice sent to Dana"); empty states invite an action. No "successfully", no "please", no
exclamation marks in system messages. Banned filler: revolutionize, supercharge, cutting-edge,
effortless, seamless, world-class, unlock, harness, next level, transform your workflow.
Correct English beats any rule about punctuation: keep real compound hyphens ("read-only",
"first-year", "twenty-five"); remove only dash-joined filler. Never write a number, name,
testimonial, logo or guarantee the user did not give you — use `{{placeholder}}`.

## 4. Hierarchy and layout

- One entry point per view. Size, weight, colour and position should all agree on it.
- Size equals importance; numbers carry the weight, labels whisper.
- Group by proximity first, then by surface; a border is the last resort.
- A run of equal cards flattens meaning: make one lead item, or use columns with hairlines, or an
  editorial split (sticky heading left, content right).
- Reading order matches visual order; layouts survive 30% longer translated text.
- Measure: 60–75 characters for reading; ledes ≤ 680 px.
- Density per mode: Operate can be dense if aligned; Persuade breathes (64 / 96 px section rhythm).

## 5. Colour

One accent per view; semantic colours only for meaning and always with an icon and a word.
Light mode: pastel fills, same-hue inks one step darker for text (AA), near-white glass, tinted
neutrals (never flat grey). Dark mode: lift the base with a trace of the accent, keep text off pure
white, desaturate large fills, glow comes from bloom not borders. Measure contrast (scripts/contrast.mjs):
4.5:1 body, 3:1 large text and UI parts, focus rings 3:1 against both neighbours. When matching a
brand hex, keep its hue as `--ac-hue` and choose `--ac-light` / `--ac-dark` for contrast, not the
raw brand value.

## 6. Typography

One family (Geist) plus a mono for readings; one display face only if the brand demands it, used
for display moments only. Four levels per view. Tabular figures on every number that can change.
Tight tracking on large type, normal on body. `text-wrap: balance` headings, `pretty` paragraphs,
no single-word last lines. Break hero lines where the thought breaks. Never italic for emphasis in UI;
never weight 800+. Truncate with an ellipsis and a tooltip only where the full value is one tap away.

## 7. Motion decisions

Ask in order:
1. **Should it animate?** Seen 100+ times a day or triggered by the keyboard → no. Tens of times →
   barely. Occasional (sheets, toasts) → yes. Rare (first run, a win) → may delight.
2. **Which question does it answer?** did it hear me / is it working / what happened. None → cut it.
3. **Easing.** Entering: strong ease-out. Moving on screen: ease-in-out. Touched things and
   arrivals: a light spring. Never ease-in for UI. Never browser defaults.
4. **Duration.** Press 80–160 ms · small popovers 125–200 · menus 150–250 · sheets and modals
   200–400 · marketing reveals 600–800 · ceremonies ~650.
5. **Properties.** transform, opacity, filter only. Popovers scale from their trigger (modals from
   centre); start from scale .95 + opacity 0, never from 0.
6. **Interruptible.** Transitions over keyframes for anything that can retrigger.
7. **Exit faster than enter.** Reduced motion: keep fades and instant swaps; remove travel.

Press feedback: `scale(.95–.97)` in ~80 ms, spring back. Hover effects only under
`(hover: hover) and (pointer: fine)`. Blur (≤ 4 px) can hide an imperfect cross-fade.

## 8. Choreography

When several things move: decide what leads, what follows, what stays still. Stagger 30–80 ms,
cap the whole sequence (≤ 400 ms for menus). Never block input while a stagger plays. A view swap
inside a container: old out fast (150 ms), new in (250 ms) with a small rise. One ambient effect
per region at a time.

## 9. States

Every interactive element: default, hover, focus, active, loading, success, error, disabled (and
prefer explaining on press over a dead disabled control). Every data surface: skeleton shaped like
the real layout (no layout shift on arrival), empty (an invitation with the next action), error
(what failed, what is safe, what to do), offline, slow network. Edge data: long names, unbreakable
strings, one-letter names, zero, 10 000+, non-Latin, emoji, missing fields.

## 10. Accessibility

Visible focus on everything (never remove the outline); 44 × 44 px targets on touch; semantic
landmarks and one h1; names for icon-only controls; form labels and inline errors tied to inputs;
dialogs trap focus, close on Escape and return focus; menus and sheets make the page behind inert;
live regions for async results (on a stable node, not one that remounts); a skip link; reduced
motion and zoom to 200% without loss; colour never the only signal.

## 11. Responsive forks

Decide, don't default: what collapses (nav → sheet; side-by-side → stacked; tables → cards or
horizontal scroll with a sticky first column), what sticks (the primary action, a filter bar), what
disappears (decoration first, never information). Check 360, 390, 768, 1024, 1440, 1920. No
horizontal scroll at 390 (watch blooms with negative inset). `100dvh` not `100vh`; inputs at 16 px
so iOS does not zoom; safe-area insets for anything fixed to the bottom.

## 12. The removal test (anti-slop)

For every decorative layer, repeated card, label, pill, CTA and animation: what information, state,
action or brand meaning does it carry? If removing it loses nothing, remove it. Look especially
for: glow + gradient + glass + border all doing the same job; a CTA and its note repeated in every
section; icon-heading-blurb tiles with interchangeable content; numbers nobody gave you; motion
that delays reading. Subtract before you restyle.

## 13. Verification gates

Turn "make it great" into checks that can fail: scorecard pass mark (review-rubric.md), zero
console errors, no horizontal scroll at 390, AA measured, reduced motion verified, keyboard path
through the primary flow, before/after side by side. Separate making from judging (a fresh reviewer
when possible). Improve in rounds; stop when the bar holds and a round changes nothing visible, or
after three rounds — and say honestly what remains.
