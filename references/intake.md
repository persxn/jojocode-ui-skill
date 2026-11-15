# Intake: turning what the user says into a product brief

## Ask in one batch, only what is missing

Read the request and any files first; ask only what they do not answer. If the user wants no
questions, or answers only some, assume, write the assumption in one line, and keep going.

**Purpose** — What is the one primary action (try a demo, sign up, book a call, buy, download)?
What exactly does the visitor get? What counts as success?
**Audience** — Who decides, who uses (they differ for B2B: a school buys, students use)? What do
they already know when they land? Where do they come from (ads, search, a link from a person)?
**Objections** — The top three reasons they do not act today.
**Proof that exists** — Real numbers, customers, testimonials, screenshots, a live demo, a
guarantee. Anything not listed here does not appear on the page except as `{{placeholder}}`.
**Surfaces** — Which pages or screens, and the mode of each (Persuade, Operate, Read, Experience).
**Brand** — Name, logo, colours, fonts, voice, words they never use. Existing site or app to keep
or replace.
**Constraints** — Stack, deadline, languages, accessibility needs, performance budget, devices.

## Vague words → concrete dials

| They say | Dial it as |
|---|---|
| "make it pop", "more premium" | Stronger hierarchy (bigger hero, fewer competing elements), more whitespace, one richer moment (bloom, clay CTA), not more colour |
| "like Apple" | Light mode first, soft pastel aurora, near-white glass, large type with tight tracking, slow weighted reveals, lots of air |
| "modern", "clean" | Fewer surfaces, one accent, 8-point rhythm, no borders where spacing groups |
| "fun", "gamified" | Gamer mode available, clay chips for counts, ceremony on rare wins only, never on every click |
| "professional", "for institutions" | Operate restraint, proof beside every claim, honest states, no hype words |
| "fast", "snappy" | Feedback ≤ 100 ms, UI transitions 150–250 ms, no entrance animation on repeated views |
| "like JojoCode" | This kit as is, re-tinted to the product's accent hue, the archetypes in surface-archetypes.md |

## Product brief (write this before designing)

```md
# <Product> — product brief
**Offer:** <what they get> · **Audience:** <decider> / <user> · **Primary action:** <verb + object>
**Mode per surface:** <surface: mode, …>
**Proof we have:** <real items, with source> · **Placeholders:** <{{…}} the owner must fill>
**Objections → answers:** <objection → where the page answers it>
**Brand:** accent hue <0–360> (<why>), modes <light/dark/gamer>, voice <three words>, never says <…>
**Constraints:** <stack, devices, a11y, perf, deadline>
**Assumptions made:** <one line each>
```
