# Surface archetypes: the JojoCode layouts, reusable

Pick the archetype, keep its skeleton and its reasons, replace the content. Each was built,
captured and reviewed in JojoCode; the reasons are what made it work there.

## 1. Product page (Persuade) — JojoCode `/product`, UI-13

Layout B (long-form story) for buyers who need educating; layout A (hero + sections) when a
screenshot explains the product; layout C (minimal) for a waitlist or download.

1. **Floating capsule bar**: glass pill off the top edge, sized to content: wordmark · 4–5 section
   anchors (current one in a recessed pill once past the hero) · Sign in (ghost) · the primary
   action (clay). Phone: a two-line burger that morphs to a cross; a full-height sheet whose links
   arrive 60 ms apart (≤ 400 ms total); the bar stays above the sheet so the CTA stays reachable.
2. **Hero**: eyebrow (the category in the product's words) · two-line heading, second line in the
   accent ink · lede capped at 680 px · ONE clay CTA with a one-line risk-reversal note under it,
   one ghost secondary at most · a proof line with a real counted number. Visual: the real product
   running (an interactive demo in a glass device frame with a bloom behind), never a stock image.
   Centre the copy and put the visual full width below when the visual is wide or interactive.
3. **Counted proof strip**: three or four real figures that roll up once on view, each with a note.
4. **How it works / how the demo works**: three steps, each a glass card with a clay icon tile,
   naming the exact control the visitor will meet inside.
5. **Who stands behind it**: origin and people (honest, specific).
6. **Tagline reveal**: one benefit sentence, 2–3 lines, huge, each word turning from 28% to full ink
   as it crosses two thirds of the viewport; phone: flows as one paragraph.
7. **The argument**: problem ledger (rows on the left, the answer panel sticky on the right),
   capability sections with their real components, rules or principles as columns with hairlines
   (not more cards).
8. **FAQ**: six to twelve real questions, head sticky on the left on desktop, expands on the right.
9. **Final CTA**: the same button as the hero, in a large glass card with bloom, plus the reassure line.
10. Footer with legal links and affiliations.

## 2. App shell (Operate) — JojoCode UI-04

Navbar capsule (glass, wordmark only, primary sections, search with Ctrl K, avatar) for users;
left sidebar for staff/admin (groups, the active item in clay, a "me" card at the foot). Folds to a
phone bar (A: bottom tabs; B: top bar + sheet) under ~1240 px. Notices (trial, billing, grants) sit
above the bar as glass strips with one recipe. Command palette: no open/close animation (it is used
hundreds of times a day).

## 3. Home bento (Operate, user's own data) — JojoCode student home, UI-08

Desktop: hero-first bento, size equals importance (the one figure that matters as the hero tile:
big tabular number, delta pill, sparkline), surrounded by the next task, streak, revise and extras.
Phone: task-first ("Continue: X, closes in 2h" is the hero), stats shrink to a strip.

## 4. Command center (Operate, staff) — JojoCode teacher home, UI-12a

Triage first: a **Now** strip (live status, attendance, countdown) → a **Needs you** queue sorted by
urgency (severity dot, count, label, age, chevron; the dots are the only loud colour) → an ambient
pulse (sparklines) → quick actions (one clay, the rest glass).

## 5. Auth stage (system) — JojoCode login, UI-05

One glass card centred on the aurora with the wordmark at its head; the same stage for sign in,
password flows, invites, 404 and errors, so a visitor meets one place before the app.

## 6. Honest system states — JojoCode §9

Skeletons shaped like the real layout (shimmer on glass, no shift on arrival) · empty states that
invite (an action, not an apology) · errors that say what failed and what to do · maintenance with
a sleeping orb, the reason and what still works · offline as a toast · a route comet only when
navigation exceeds ~300 ms.

## 7. Demo funnel (Persuade → Operate) — JojoCode trial, UI-13

One button, no form → a sealed copy of the product → four welcome cards (where you are, who you
are, what is in it, how it ends) → a strip on every page: Demo badge (recess, not clay) · role
switch (recessed track, raised glass pill) · countdown ring chip · quota chip ("38 of 40 runs") ·
Leave (ends the session before navigating) → a "what to try" rail, folded on phones.
