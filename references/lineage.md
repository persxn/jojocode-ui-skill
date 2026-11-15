# Lineage: where each part of this system comes from

This skill is standalone: everything it needs is in `craft.md`, the other references and the
assets. The skills below are where its ideas were learned. **If one of them happens to be
installed**, you may read the named part for more depth; if not, nothing is missing.

| Phase | Skill | Read | What it gives this system |
|---|---|---|---|
| 0 | `impeccable` | SKILL.md "Modes", "How to design" | Persuade / Operate / Read / Experience; "the brief wins"; refinement preserves, redesign replaces |
| 0 | `web-design-engineer` | SKILL.md "Step 0: Verify Facts" | Check facts before designing; placeholders instead of invention |
| 1 | `landing-page-design` | Part A1 Intake, A4 Conversion rules | The intake questions for a page that sells; one offer, one audience, one action |
| 1 | `web-design-engineer` | Steps 1, 2, 2b "Design Read and Five Dials" | When to ask vs assume; gathering design context; dials for density, contrast, motion, ornament, voice |
| 1 | `ui-ux-pro-max` | SKILL.md "Step 1: Analyze User Requirements" | Product type → style, industry conventions |
| 2 | `better-colors` | SKILL.md (palette generation, contrast) | Matching a brand hex, semantic token naming, measured contrast |
| 2 | `theming-system` | SKILL.md | Several brands or tenants on one component set |
| 2 | `dark-mode-design` | SKILL.md | When dark is the primary mode: elevation, desaturation |
| 2 | `typography-scale`, `better-typography` | scale + wrapping sections | Text-heavy products; balance, pretty, tabular figures, punctuation |
| 2 | `motion-system` | SKILL.md | Motion tokens product-wide (the kit already carries JojoCode's) |
| 3 | `landing-page-design` | A2 structure, A3 layout selection, A5 copy, B5 hero, B11 tagline reveal | Product page sequence and copy formulas |
| 3 | `visual-hierarchy`, `better-layout` | SKILL.md | Entry point, size = importance, grouping, reading order, room for translation |
| 3 | `navigation-patterns`, `information-architecture` (if vendored) | SKILL.md | Choosing bar / sidebar / tabs / hub for the product's structure |
| 3 | `responsive-craft` | `references/responsive-design-forks.md`, `sticky-scroll-patterns.md` | The real phone decisions (what collapses, what sticks) |
| 3 | `planning-and-task-breakdown` | SKILL.md | Ordered, verifiable tasks for the roadmap |
| 3 | JojoCode's work-package process | (in roadmap.md) | Brief → plan → slices → verify → review → close, with rendered proof |
| 4 | `frontend-ui-engineering` | SKILL.md | Production components, a11y in the build, state management |
| 4 | `emil-design-eng` | "Animation Decision Framework", "Component Building Principles" | Should it animate, which easing, how long; press scale; origin-aware popovers |
| 4 | `animate`, `choreograph` | SKILL.md | One animation built in the right order; several elements moving as one |
| 4 | `loading-states`, `error-handling-ux`, `feedback-patterns`, `form-design` | SKILL.md | The states every surface owes |
| 4 | `ponytail` | SKILL.md (full) | The smallest code that fully solves it |
| 4 | 5 | `critique-visual-hierarchy`, `critique-information-density`, `critique-typography`, `critique-color` | SKILL.md each | The four visual lenses on a rendered screen |
| 5 | `better-interface` | SKILL.md + `review-format.md` | One ranked report across accessibility, layout, writing, type, colour, polish |
| 5 | `review-animations` | SKILL.md | The motion lens; default to flagging |
| 5 | `audit-ai-design-slop` | SKILL.md | The removal test; fake proof; decorative stacking |
| 5 | `accessibility-audit`, `better-accessibility` | SKILL.md | WCAG lens with severities |
| 5 | `heuristic-evaluation` | SKILL.md | Nielsen pass for flows (funnels, onboarding) |
| 5 | `break-ui` | SKILL.md | Worst-case data: long names, zero, 10 000+, non-Latin |
| 6 | `better-ui` | SKILL.md | Exact radius, shadow, optical alignment, icon states |
| 6 | `impeccable` | `reference/polish.md`, `bolder.md`, `quieter.md`, `distill.md`, `layout.md`, `colorize.md`, `typeset.md` | Named refinement passes |
| 6 | `interfaces-that-feel` | SKILL.md | When it is correct but cold: copy, motion, interaction warmth |
| 6 | `better-writing`, `ux-writing` | SKILL.md | Labels, errors, empty states in the product's voice |
| 6 | `remove-animations`, `find-animation-opportunities` | SKILL.md | Subtract motion that does not answer a question; add where state changes silently |
| 7 | JojoCode's verify ladder | (in roadmap.md, scripts/) | typecheck, CSS check, tests, logic grep, captures |
| 7 | `iterate-until-verified` | §2 gates, §4 separate making from judging, §7 stop honestly | Turning ambition into pass/fail gates |
| 7 | `workflow-score-to-target` | §2 anchor the rubric, §4 improve in rounds | Scoring to a bar instead of "looks fine" |
| 7 | `animation-performance`, `optimize-web-animations` | SKILL.md | Frame budget; pausing offscreen loops |

## Sources

landing-page-design (elayadesign/ai-design-skills, MIT) · impeccable (pbakaus, Apache-2.0) ·
web-design-engineer (ConardLi/garden-skills, MIT) · ui-ux-pro-max (nextlevelbuilder, MIT) ·
emil-design-eng, animate, choreograph, review-animations and family (emilkowalski/skills, MIT) ·
better-* , break, state-machine (jakubkrehel/skills, MIT) · critique-*, visual-hierarchy and the
designer set (Owl-Listener/designer-skills, MIT) · audit-ai-design-slop, iterate-until-verified,
workflow-score-to-target (MengTo/Skills, MIT) · frontend-ui-engineering, planning-and-task-breakdown
(addyosmani/agent-skills, MIT) · responsive-craft (kylezantos, MIT) · ponytail (DietrichGebert, MIT).
No text from them is bundled; the playbooks are rewritten summaries.

## Conflicts already resolved

| Topic | Skill says | This system does | Why |
|---|---|---|---|
| Backgrounds | landing-page-design: flat only | Aurora backdrop stays; cards never get gradients | The aurora is the backdrop's one job (JojoCode law 2); gradients elsewhere read as template |
| Type scale | landing-page-design: Tailwind raw steps | Kit tokens (they are those steps, fluid) | One scale, clamp() between breakpoints |
| Hero heading | landing-page-design: grey gradient text | Solid ink, accent on the second line | Gradient text is reserved for the wordmark and gamer display moments |
| Hyphens | landing-page-design: none in copy | Rewrite compound phrases where natural; keep real compound hyphens ("read-only", "first-year", "twenty-five") | Readability over dogma |
| Duration | emil-design-eng: < 300 ms | UI feedback < 300 ms; marketing reveals 600–800 ms; ceremonies 650 ms | Frequency decides speed |
| Ambition | impeccable: bold, out-of-distribution | Bold on Persuade; precise and quiet on Operate and Read | The mode decides how loud |
| Questions | landing-page-design: ask intake; web-design-engineer: ask by context | One batch, only what is missing, assumptions stated in one line | Never stall the build |
| Fonts | landing-page-design: Geist, Manrope, Poppins | Geist + a mono; one display face only by brand need | One typeface per site |
