---
name: github-readme
description: Draft a showcase-grade GitHub README.md for any product, in the style of persxn/codehaunt — centred hero with logo, one-line claim, tech badges, anchor nav, a real demo GIF, then Why / How it works / Architecture / Run it / Production / Code map / Credits with section icons. Reads the repository to get every fact right. If the product has no logo, icon set or demo media, it writes ready-to-paste ChatGPT image prompts (one or several) for exactly the assets the README needs. Use when someone asks for a README, a GitHub landing page, "make the repo look good", or a project write-up — standalone; needs no other skill.
---

# GitHub README, codehaunt-grade

The reference is `github.com/persxn/codehaunt`: it reads like a product page, not a manual. Every claim in it is
true of the code. Match that bar: **beautiful, specific, and verifiable.**

## 1. Read before writing (never invent)

Collect, from the repository itself:
- **What it is and for whom**: existing README, docs/, package.json `description`, the landing page copy, CLAUDE.md.
- **Stack with versions**: package.json / lockfiles / Dockerfile / compose / pyproject → exact major versions for badges.
- **How to run it**: scripts (`dev`, `start`, `test`), `.env.example` (names only — never values), compose services, ports.
- **Architecture**: top-level folders, services, data stores, queues, external calls. Draw only what exists.
- **Proof**: tests, CI workflows, licence file, screenshots/GIFs already in the repo (`.github/`, `docs/`, `public/`).
- **Assets present?** Search for a logo/app icon (`logo*`, `icon*`, `favicon*`, `*.svg` in `public/` or `.github/`), section
  icons, and demo media. Note what is missing — §4.

Never print secrets, `.env` values, personal data or customer data. A number in the README must be countable in the repo.

## 2. The layout (in this order)

```markdown
<div align="center">

<img src=".github/readme/icons/app-icon.png" alt="<Product> logo" width="120">

# <Product>

**<One-line claim: what it does, for whom, in ≤ 14 words.>**
<Two sentences: the mechanism and the twist that makes it different. One `!` at most.>

<p>
<img alt="<Tech> <ver>" src="https://img.shields.io/badge/<Tech>-<ver>-<hex>?logo=<simpleicons-slug>&logoColor=white">
…one badge per load-bearing technology, then the licence badge last…
</p>

<a href="#-see-it-in-action">See it</a> ·
<a href="#-why-we-built-it">Why</a> ·
<a href="#-architecture">Architecture</a> ·
<a href="#-run-it-yourself">Run it</a> ·
<a href="#-repository-map">Code map</a>

<br><br>

<img src=".github/readme/demo/<flow>.gif" alt="<What happens in the recording, step by step, as a sentence.>" width="900">

<sub><Honest caption: real recording or mock-up, what data, what is stand-in.></sub>

</div>

---

## <img src=".github/readme/icons/<icon>.svg" width="26" align="top"> Why we built it
## <img …> See it in action          (2–4 GIFs/screens per role or flow, each with a one-line caption)
## <img …> How it works              (numbered flow, or a table of problem → our answer)
## <img …> Architecture              (a Mermaid diagram of what exists, then 4–8 bullets)
## <img …> Run it yourself           (prerequisites, then copy-paste blocks that work on a fresh clone)
## <img …> Production                (only if the repo has deploy files)
## <img …> Repository map            (a tree of the top two levels with one-line purposes)
## <img …> Credits & licence
```

Rules that make it look like codehaunt:
- **Hero is centred** inside `<div align="center">`; everything after `---` is left-aligned.
- **Badges**: shields.io `flat` style, one row, real versions, brand hex colours, `logo=` slug from simpleicons.org.
- **Anchor nav**: GitHub slugs an icon-prefixed heading as `#-<words-with-dashes>`; check every link resolves.
- **Section icons**: one 26 px SVG per H2, same family and stroke weight (store in `.github/readme/icons/`).
- **Tables over paragraphs** for trade-offs; **bold the first words** of a bullet when they carry the point.
- **Voice**: plain, confident, specific numbers ("blocks paste", "3 lines", "token budget"), British or American
  spelling consistently, no marketing filler ("seamless", "cutting-edge", "revolutionary").
- **Alt text** describes what happens in the image, as a sentence. Every image has a width.
- **Commands are tested**: run each "Run it" block on a clean checkout (or say which step was not run).
- Keep it under ~400 lines; move long reference material to `docs/` and link it.

## 3. Media

- Prefer real recordings: Playwright or the OS recorder → `ffmpeg -i in.mp4 -vf "fps=15,scale=900:-1:flags=lanczos,split[a][b];[a]palettegen[p];[b][p]paletteuse" -loop 0 out.gif`
  (keep each GIF < 8 MB; trim to the one flow it shows).
- Light and dark screenshots: `<picture><source media="(prefers-color-scheme: dark)" srcset="…-dark.png"><img src="…-light.png" …></picture>`.
- Mock data only in recordings; say so in the caption.

## 4. No logo or icons? Write the ChatGPT prompts

If §1 found no logo, app icon, section-icon set or hero art, output a section **"Assets to generate"** with one
ready-to-paste prompt per asset (several prompts when the assets differ in kind; one combined prompt when they are a
consistent set). Each prompt states: subject, style, palette (hex from the product's tokens/CSS if present), format,
size, background, and what to avoid. Templates:

**App icon / logo mark**
```
Design an app icon for "<Product>", <one-line what it does>. Subject: <a single memorable motif tied to the product,
e.g. a reaper mascot for a "haunted" coding contest>. Style: <flat vector / soft 3D clay / line>, bold silhouette that
reads at 32 px, no text. Palette: <hex 1>, <hex 2>, <accent hex>. Square 1024×1024 PNG, transparent background,
centred with 10 % padding. Avoid: gradients that band, thin strokes, letters, stock-art clichés.
```

**Wordmark (optional)**
```
Create a horizontal wordmark "<Product>" to sit beside the icon. Typeface feel: <geometric sans / rounded / mono>,
weight <600–700>, letter-spacing slightly tight. Colour <hex> on transparent; also a white version. 2000×500 PNG.
```

**Section icon set (one prompt, consistent set)**
```
Make a set of <N> matching icons for a README, one per concept: <why, demo, how it works, architecture, run, production,
code map, credits — use motifs that fit the product's theme>. Same style for all: <2 px line / duotone> on a 24×24
grid, rounded caps, colour <hex>, transparent background. Deliver each as a separate SVG (or 256×256 PNG), named
<concept>.svg. No text inside icons.
```

**Social preview (GitHub "Open Graph" image)**
```
Design a 1280×640 social preview for the GitHub repo "<Product>": the icon on the left, the name and the one-line claim
"<claim>" on the right, background <hex> with a subtle <theme> texture. Keep 80 px safe margins; no small text.
```

Tell the user where each file goes (`.github/readme/icons/app-icon.png`, `.github/readme/icons/<concept>.svg`,
`.github/readme/social.png` → repo Settings → Social preview), and leave the README's `<img>` paths pointing there.

## 5. Finish

1. Write `README.md` (and `.github/readme/` placeholders if assets are pending).
2. Check: every anchor resolves, every image path exists or is listed under "Assets to generate", badge versions match
   the lockfile, commands were run, no secrets.
3. Show the user the hero (top 40 lines) and the asset prompts; commit only when asked.
