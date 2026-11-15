<div align="center">

<img src=".github/readme/icons/logo.png" alt="JojoCode UI skill icon: angle brackets around three stacked bars on a glossy blue-to-violet tile" width="112">

# jojocode-ui-skill

**A standalone Claude skill that designs, builds, reviews and tightens a product's website or app UI in the JojoCode style**
<br>calm, premium, honest, and alive where it matters, for any product, from one accent hue.

<p>
<img alt="Claude skill" src="https://img.shields.io/badge/Claude-skill-8A45FF">
<img alt="Standalone" src="https://img.shields.io/badge/standalone-no%20other%20skills%20needed-4A68FF">
<img alt="Modes" src="https://img.shields.io/badge/modes-light%20·%20dark%20·%20gamer-C55DFF">
<img alt="WCAG AA" src="https://img.shields.io/badge/contrast-WCAG%20AA%20measured-059669">
<img alt="OKLCH" src="https://img.shields.io/badge/colour-OKLCH-15123A">
<img alt="Zero dependencies" src="https://img.shields.io/badge/kit-zero%20dependencies-0369A1">
<img alt="Playwright" src="https://img.shields.io/badge/captures-Playwright-2EAD33?logo=playwright&logoColor=white">
<img alt="MIT license" src="https://img.shields.io/badge/license-MIT-F59E0B">
</p>

<a href="#-why-it-exists">Why</a> ·
<a href="#-see-it">See it</a> ·
<a href="#-the-references">References</a> ·
<a href="#-how-a-build-runs">How it works</a> ·
<a href="#-the-design-language">Design language</a> ·
<a href="#-install">Install</a> ·
<a href="#-whats-inside">Code map</a>

<br><br>

<img src=".github/readme/demo/switch.gif" alt="The bundled product-page template switching live between light, dark and gamer modes and the Amethyst, Electric, Jade and Ember accents. Every surface, shadow and gradient re-tints from one hue." width="900">

<sub>The bundled template (a fictional product, "Fieldbook") switching modes and accents. Nothing is restyled by hand: one <code>--ac-hue</code> drives every colour.</sub>

</div>

<br>

## <img src=".github/readme/icons/spark.svg" width="26" align="top"> Why it exists

JojoCode is an automatic judge and classroom platform. Its interface was rebuilt from scratch across
twenty work packages, each designed against an owner's brief, captured at six sizes in three modes,
reviewed by a fresh reviewer and tightened until it passed. The result has a recognisable feel:
near-white glass over a soft aurora, glossy "Iris clay" buttons, navy type, and motion that only
moves when it has something to say.

Building that took the best parts of about seventy design skills: landing-page structure from one,
the animation decision framework from another, critique lenses, anti-slop audits, responsive
forks, contrast rules. Each is good at one thing; none of them is the whole job.

**This skill is the whole job, packaged.** It runs a build end to end, from *"here is what I want"*
to a reviewed, measured, shipped interface, and carries the JojoCode system with it so the same
quality can be reproduced for **any other product**: re-tinted to that product's hue and recomposed
around its own truth, never copying JojoCode's content.

- **It decides what to read.** Seven phases, each with its own playbook, so a session reads the
  right fifty lines instead of thirty whole skills.
- **It ships a real kit.** Tokens for three modes driven by one hue, the surface recipes, a working
  product-page template and a component gallery, all plain CSS and HTML.
- **It measures instead of eyeballing.** A capture script (every size, mode and accent, plus a
  report of sideways scroll and console errors) and a contrast checker that reads OKLCH.
- **It refuses to invent.** Numbers, testimonials and logos the user did not give become
  `{{placeholders}}`, and the review fails a page that fakes proof.

<br>

## <img src=".github/readme/icons/eye.svg" width="26" align="top"> See it

Everything in this section was rendered from the files in this repository with
`scripts/capture.mjs`. The product is fictional sample content; swap in your own.

### One page, four accents

The same HTML with only `data-accent` changed. The clay triad, the tinted neutrals, the recesses,
the shadows and the aurora all follow the hue.

| Amethyst (287°) | Electric (255°) |
|---|---|
| <img src=".github/readme/shots/hero-1440x900-light-amethyst.png" alt="Product page hero in the Amethyst accent: violet clay button, periwinkle and blush aurora"> | <img src=".github/readme/shots/hero-1440x900-light-electric.png" alt="Product page hero in the Electric accent: blue clay button, sky aurora"> |
| **Jade (182°)** | **Ember (13°)** |
| <img src=".github/readme/shots/hero-1440x900-light-jade.png" alt="Product page hero in the Jade accent: teal clay button, mint aurora"> | <img src=".github/readme/shots/hero-1440x900-light-ember.png" alt="Product page hero in the Ember accent: rose clay button, peach aurora"> |

### Three modes from one set of components

Light is calm and the most polished (soft, pastel, Apple-like). Dark adds glow. Gamer cycles the hue
and spends its one display moment on the hero's accent line.

| Light | Dark | Gamer |
|---|---|---|
| <img src=".github/readme/shots/page-1440x900-light.png" alt="The full product page in light mode"> | <img src=".github/readme/shots/page-1440x900-dark.png" alt="The full product page in dark mode"> | <img src=".github/readme/shots/page-1440x900-gamer.png" alt="The full product page in gamer mode"> |

<table>
<tr>
<td width="33%" align="center"><img src=".github/readme/shots/phone-390x844-light.png" alt="The product page on a phone in light mode" width="240"><br><sub>390 px, light</sub></td>
<td width="33%" align="center"><img src=".github/readme/shots/phone-390x844-dark.png" alt="The product page on a phone in dark mode" width="240"><br><sub>390 px, dark</sub></td>
<td width="33%" align="center"><img src=".github/readme/shots/phone-390x844-gamer.png" alt="The product page on a phone in gamer mode" width="240"><br><sub>390 px, gamer</sub></td>
</tr>
</table>

### The kit, every recipe

`assets/kit-gallery.html` shows every building block: clay primary, glass secondary and ghost
buttons; status chips (recessed, never clay); the segmented control; a recessed input; a figure
with its delta and track; the countdown ring; clay icon tiles over a bloom; the palette one hue
produces; the FAQ expand.

| Light | Dark | Gamer |
|---|---|---|
| <img src=".github/readme/shots/kit-1440x900-light.png" alt="Kit gallery in light mode"> | <img src=".github/readme/shots/kit-1440x900-dark.png" alt="Kit gallery in dark mode"> | <img src=".github/readme/shots/kit-1440x900-gamer.png" alt="Kit gallery in gamer mode"> |

<br>

## <img src=".github/readme/icons/book.svg" width="26" align="top"> The references

What the skill reproduces. These are JojoCode itself, captured on invented test data, and the three
Iris boards the product's owner set as the target for light mode.

### JojoCode's product page

The structure `references/surface-archetypes.md` calls *Product page*: a floating glass capsule
bar, a hero with one clay action and the real product running in a device frame, counted proof,
three steps that name the controls the visitor will meet, and a strip previewing the demo's
countdown ring and quota chips.

| Light | Dark | Gamer |
|---|---|---|
| <img src=".github/readme/refs/jojocode-product-light.jpg" alt="JojoCode product page in light mode: 'Write code. Know in a second.' with the judge demo in a glass frame"> | <img src=".github/readme/refs/jojocode-product-dark.jpg" alt="JojoCode product page in dark mode with a deep violet and teal aurora"> | <img src=".github/readme/refs/jojocode-product-gamer.jpg" alt="JojoCode product page in gamer mode on near black"> |

### Inside the product

| Student home (bento, size equals importance) | Teacher command center (triage first) |
|---|---|
| <img src=".github/readme/refs/jojocode-student-home.jpg" alt="Student home: rating hero tile with a chart, next graded set, streak, today's three, the Forge"> | <img src=".github/readme/refs/jojocode-teacher.jpg" alt="Teacher overview: live class strip, a 'Needs you' queue sorted by urgency, doubts, pulse figures"> |
| **The demo strip (ring + quota chips)** | **The demo's welcome cards** |
| <img src=".github/readme/refs/jojocode-demo-strip.jpg" alt="Demo strip above the app: Demo badge, student and teacher switch, countdown ring with 59:53, 40 of 40 runs, Leave the demo"> | <img src=".github/readme/refs/jojocode-welcome.jpg" alt="First of four welcome cards over a blurred app: 'This is a real class, and nobody in it is real'"> |

<img src=".github/readme/refs/jojocode-login.jpg" alt="JojoCode sign-in stage: one glass card on the aurora with the wordmark at its head">
<sub>The auth stage: one glass card on the aurora, the same place for sign in, password flows, invites, 404 and errors.</sub>

### The Iris boards (the light-mode target)

| Components | Navigation |
|---|---|
| <img src=".github/readme/refs/iris-components.jpg" alt="Iris board: clay, glass and ghost buttons in three sizes, controls, progress, verdict and tier chips, toasts, a light bar chart"> | <img src=".github/readme/refs/iris-navigation.jpg" alt="Iris board: navbar resting and condensed, teacher sidebar, tabs and filters, command palette, breadcrumb, phone layouts"> |

<img src=".github/readme/refs/iris-home.jpg" alt="Iris board: the student home with greeting, rating hero, next set, streak and coins, revise, forge, class board, topic radar">
<sub>Board 15, the home: the palette (clay #4A68FF → #8A45FF → #C55DFF, periwinkle recesses, navy type) that the kit derives for any hue.</sub>

<br>

## <img src=".github/readme/icons/layers.svg" width="26" align="top"> How a build runs

<img src=".github/readme/diagrams/phases.svg" alt="Eight phases: facts and mode, analyse the demands, direction, layout and roadmap, build on the kit, review with the scorecard, tighten, verify and hand over; review and tighten loop up to three rounds.">

| Phase | Produces | Reads |
|---|---|---|
| **0 · Facts and mode** | what is real (everything else is a `{{placeholder}}`); the surface's mode: Persuade, Operate, Read or Experience | SKILL.md, craft §1 |
| **1 · Demands** | one batch of only the missing questions, vague words turned into dials, a written product brief | `references/intake.md` |
| **2 · Direction** | the accent hue, the modes, the type, the motion temperament; contrast measured | `references/jojo-design-language.md`, `scripts/contrast.mjs` |
| **3 · Layout and roadmap** | an archetype per surface with its section order and entry point; work packages for bigger builds | `references/surface-archetypes.md`, `references/roadmap.md` |
| **4 · Build** | code on the kit, section by section, every state and every changed value accounted for | `assets/`, craft §7 to §9 |
| **5 · Review** | fourteen lenses scored 0 to 4 with evidence; twelve known traps walked | `references/review-rubric.md`, `scripts/capture.mjs` |
| **6 · Tighten** | passes in the order they pay off, reported as Before / After / Why | `references/tighten.md` |
| **7 · Verify** | the size matrix, reduced motion, keyboard, measured contrast, an honest hand-over | `scripts/`, craft §13 |

**Pass mark:** no lens below 3, and the surface's own lens (conversion for Persuade, scanability for
Operate, comprehension for Read) at 4. Stop when it holds and a round changes nothing visible, or
after three rounds, saying what remains.

<details>
<summary><b>The twelve traps the review always checks</b> (each one was a real defect in JojoCode)</summary>

- A `position: fixed` dialog inside a glass bar is trapped by the bar's `transform` and `backdrop-filter`. Portal dialogs to `body`.
- A `z-index` on `main` puts every modal under the bar.
- A bloom with negative inset scrolls the phone sideways by a few pixels.
- Hand-made pills stay 32 px on touch screens while kit buttons grow to 44.
- A status badge in clay reads as a button.
- A panel that is open on the server and folds on the client jumps on load.
- Random ids differ between server and client.
- A page's own entrance keyframes skip reduced motion.
- A feature's kill switch leaves its FAQ answers behind.
- "No hyphens" turns "read-only" into wrong English.
- Tabular figures apply only inside one wrapper, so a countdown jiggles elsewhere.
- A rebuilt page that is the old page with new colours.

</details>

<br>

## <img src=".github/readme/icons/palette.svg" width="26" align="top"> The design language

Ten laws, condensed from JojoCode's brief (full text in `references/jojo-design-language.md`):

1. **Motion is the product talking.** Every animation answers *did it hear me*, *is it working* or *what happened*.
2. **Every style has exactly one job.** Aurora is the backdrop, glass the surface, recess holds what you put in, clay is the primary action and the active state.
3. **One vocabulary, three intensities.** Modes differ in tokens and intensity, never in structure.
4. **Organic bloom is the only glow.** Soft, off-centre, in neighbouring hues; never a hard halo.
5. **FX budget.** One ambient effect per region.
6. **Ceremony scales with meaning.** A quiet tick for small things; the burst for the real win.
7. **Readability is measured.** AA on glass included.
8. **Honest states.** Empty, loading, error, offline: what happened, what is safe, what still works.
9. **Premium is restraint plus precision.** One accent, tabular numbers, an 8-point rhythm.
10. **No sound,** and no rainbow, neon or spinning-gradient decoration.

**One hue drives everything.** `--ac-hue` feeds OKLCH formulas, so contrast holds for any hue:

| Token (light) | Formula | At 287° |
|---|---|---|
| Page | `oklch(0.97 0.011 h+4)` | #f5f4fc |
| Strong ink | `oklch(0.214 0.075 h−6)` | #15123a · 17.3:1 on glass |
| Muted ink | `oklch(0.485 0.049 h)` | #5d5b7a · 6.3:1 on glass |
| Recess | `oklch(0.922 0.03 h−12)` + inner shade | periwinkle |
| Iris clay | 100° gradient through `h−19 → h+9 → h+28` under a glossy top half | #4A68FF → #8A45FF → #C55DFF |

Greens and teals (hue ≈ 130 to 200) need the clay 0.09 darker for white labels to pass;
`node scripts/contrast.mjs --hue 182` says so and `--clay-l: -0.09` fixes it (the Jade accent ships with it).

| Motion token | Value | For |
|---|---|---|
| `--dur-feedback` | 100 ms | the "did it hear me" answer |
| `--dur-small` / `--dur-layout` | 200 / 350 ms | state changes / panels and sheets |
| `--ease-spring` | `cubic-bezier(.3, 1.4, .4, 1)` | anything touched; arrivals |
| `--ease-squish` | `cubic-bezier(.3, 1.7, .4, 1)` | a pressed control springing back |
| `--ease-weighted` | `cubic-bezier(.22, 1, .36, 1)` | marketing reveals, 600 to 800 ms |

<br>

## <img src=".github/readme/icons/play.svg" width="26" align="top"> Install

The skill is the repository root. Nothing else needs to be installed for it to work.

**Claude Code, for every project:**
```bash
git clone https://github.com/persxn/jojocode-ui-skill ~/.claude/skills/jojocode-ui-skill
```

**Claude Code, for one project:**
```bash
git clone https://github.com/persxn/jojocode-ui-skill .claude/skills/jojocode-ui-skill
```

**Claude.ai:** download the repository as a zip and upload it under *Settings → Capabilities → Skills*.

Then ask for what you want; the skill triggers on its own for whole-surface UI work:

```text
Make me a landing page for Tallyho, an app that lets restaurant owners count stock with their phone
camera. Same feel as JojoCode, light mode first.

We're redesigning our invoicing SaaS (site, login, dashboard, invoices, settings). Plan it and give me
a roadmap before any code.

Here's our pricing page. It feels flat and generic. Review it like the JojoCode team would and tighten it.
```

### The scripts

Both run on Node 18 or later. `capture.mjs` uses Playwright from the project you run it in
(`npm i -D playwright && npx playwright install chromium`); `contrast.mjs` needs nothing.

```bash
# Every size, mode and accent; scrolls first so reveal-on-scroll sections render;
# writes report.json with sideways overflow and console errors per shot.
node scripts/capture.mjs --url http://localhost:3000 --out shots \
  --modes light,dark,gamer --accents amethyst,jade --sizes matrix --hide ".cookie-banner"

# Contrast, measured (hex, rgb, oklch; translucent glass composited over its base).
node scripts/contrast.mjs "oklch(0.485 0.049 287)" "rgba(255,255,255,.68)" --over "#f5f4fc"
node scripts/contrast.mjs --hue 182          # the kit's inks and clay label for a new hue
```

<br>

## <img src=".github/readme/icons/folder.svg" width="26" align="top"> What's inside

```text
jojocode-ui-skill/
├── SKILL.md                         the eight phases, what each reads, when rules disagree
├── references/
│   ├── intake.md                    questions, vague words → dials, the product brief template
│   ├── jojo-design-language.md      ten laws, colour from one hue, type, space, motion, the "do not" list
│   ├── surface-archetypes.md        product page, app shell, home bento, command center, auth stage, states, demo funnel
│   ├── roadmap.md                   the package order and the loop every package runs
│   ├── craft.md                     13 playbooks: modes, conversion, copy, hierarchy, colour, type,
│   │                                motion, choreography, states, a11y, responsive, anti-slop, gates
│   ├── review-rubric.md             14 lenses, the pass mark, 12 known traps
│   ├── tighten.md                   the passes in order and the moves that make a page the best one
│   └── lineage.md                   where each idea comes from; conflicts already resolved
├── assets/
│   ├── jojo-kit.css                 tokens (3 modes × any hue × 3 performance tiers) and recipes
│   ├── product-page.html            the product-page structure, working, with a mode/accent switcher
│   └── kit-gallery.html             every recipe on one page (?mode=dark&accent=jade)
├── scripts/
│   ├── capture.mjs                  screenshots + overflow and console report
│   └── contrast.mjs                 WCAG contrast, OKLCH aware, no dependencies
└── evals/                           three test cases in the `claude plugin eval` layout
```

<br>

## <img src=".github/readme/icons/check.svg" width="26" align="top"> Tests

`evals/` holds three cases, each with a prompt, the expected outcome and graders:

| Case | Checks that the skill… |
|---|---|
| `landing-page-for-new-product` | builds on the kit with one clay action repeated at the end, a tagline reveal and a FAQ, and invents no proof |
| `roadmap-for-saas-redesign` | writes a brief with assumptions, maps each surface to an archetype, orders foundations first, writes no code |
| `review-and-tighten-existing-page` | scores the rubric with evidence on a deliberately sloppy pricing page, edits it, reports Before / After / Why, adds no prices or claims |

Run them with and without the skill (Claude Code 2.1.269 or later; these are real, billed model runs):

```bash
claude plugin eval . --allow-tools Write,Edit,Bash --scaffold
```

<br>

## Credits

The JojoCode interface and its brief are by the JojoCode team (UEM Kolkata). The playbooks in
`references/craft.md` are rewritten summaries of ideas learned from these MIT and Apache-2.0
licensed skills; no text from them is bundled, and none is needed to run this one:
[landing-page-design](https://github.com/elayadesign/ai-design-skills) ·
[impeccable](https://github.com/pbakaus/impeccable) ·
[web-design-engineer](https://github.com/ConardLi/garden-skills) ·
[ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) ·
[Emil Kowalski's skills](https://github.com/emilkowalski/skills) ·
[jakubkrehel/skills](https://github.com/jakubkrehel/skills) ·
[designer-skills](https://github.com/Owl-Listener/designer-skills) ·
[MengTo/Skills](https://github.com/MengTo/Skills) ·
[agent-skills](https://github.com/addyosmani/agent-skills) ·
[responsive-craft](https://github.com/kylezantos/responsive-craft) ·
[ponytail](https://github.com/DietrichGebert/ponytail).

## License

MIT. See [LICENSE](LICENSE).
