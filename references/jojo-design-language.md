# The JojoCode design language

What makes a JojoCode build feel like one. Values live in `../assets/jojo-kit.css`; this file is
the reasoning, so the system can be extended without breaking it.

## Ten laws

1. **Motion is the product talking.** Every animation answers *did it hear me* (feedback within
   100 ms), *is it working* (real progress, never a fake spinner) or *what happened* (a result whose
   ceremony matches its weight). Motion that answers none of these does not ship.
2. **Every style has exactly one job.** Aurora is the backdrop. Glass is the surface (bars, cards,
   sheets). Recess is for things you put something into (inputs, tracks, toggles, count chips),
   never text or cards. Clay is only the primary action and the active state (primary button,
   active tab pill, icon tiles, avatars). Mixing jobs is what makes a page look generated.
3. **One vocabulary, three intensities.** Light, dark and gamer share components and motion; they
   differ only in tokens and intensity. Light is calm, dark adds glow, gamer adds the cycling hue
   and one display face.
4. **Organic bloom is the only glow.** Soft, off-centre, blurred shapes in neighbouring hues behind
   a thing, never a hard uniform `box-shadow` halo (hard glow only on tiny pips and dots).
5. **FX budget.** At most one ambient effect visibly animating per viewport region.
6. **Ceremony scales with meaning.** A small success is a quiet tick; the real win gets the burst;
   rare achievements get the full ceremony. Rarity keeps it special.
7. **Readability is measured.** AA everywhere, glass included: 4.5:1 body, 3:1 large text and UI.
8. **Honest states.** Every empty, loading, error, offline and maintenance state says what
   happened, what is safe, and what still works. No dead ends, no invented numbers.
9. **Premium is restraint plus precision.** Few colours per view, one accent, consistent radii,
   tabular numbers, aligned baselines, an 8-point rhythm.
10. **No sound.** And no rainbow, neon text or spinning gradient decoration.

## Colour: one hue drives everything

Set `--ac-hue` (0–360) and the kit derives the rest in OKLCH, so contrast holds for any hue:

- **Light (the most polished mode; soft, pastel, Apple-like).** Page `oklch(0.97 0.011 h+4)`,
  ink `oklch(0.214 0.075 h−6)` (≈15:1), muted `oklch(0.485 0.049 h)` (≈5.6:1), near-white glass
  `rgb(255 255 255 / .68)` with a white top highlight, recess `oklch(0.922 0.03 h−12)` with an inner
  shade, and the **Iris clay**: a 100° gradient through `h−19 → h+9 → h+28` (for Amethyst, 287°:
  `#4A68FF → #8A45FF → #C55DFF`) under a glossy top half, a light rim and a soft drop shadow in the
  same hue. Aurora: three pastel blobs (periwinkle, blush, aqua for Amethyst).
- **Dark.** Base `color-mix(accent 9%, #07070c)`, glass `rgb(255 255 255 / .065)`, deep inset
  recess, clay as a lit accent lozenge, saturated aurora at lower opacity, more grain.
- **Gamer.** Near-black base, the hue cycles (`@property --hue`, 28 s), the glass highlight takes
  the hue, one display face (Unbounded / Chakra Petch) for display moments only.

Run `node scripts/contrast.mjs --hue <h>` for any new hue: the inks hold everywhere, but white on
the clay drops under 4.5:1 for greens and teals (≈130–200); set `--clay-l: -0.09` there.

Semantic colours never take the accent: success, danger, caution and info are fixed hues with a
light ink variant that passes AA on glass. Meaning is never colour alone (always icon + label).

**Picking the hue for a new product** (when the brand gives none):

| Temperament | Hue | Accent family |
|---|---|---|
| Learning, craft, creative tools | 280–300 | Amethyst (JojoCode default) |
| Trust, finance, infrastructure | 245–260 | Electric blue |
| Health, growth, climate | 170–185 | Jade (teal, kept off success green) |
| Energy, food, community | 15–35 | Ember (keep danger red distinct with icons) |

## Type

Geist for all interface text (semibold at most; no italics; no ultra-bold). A mono (Geist Mono or
JetBrains Mono) for numbers that are readings, timers, code. Tabular figures on every number.
Kit scale (fluid with `clamp`): eyebrow 11–12 uppercase tracked .12em · meta 12 · body 14–16 ·
titles 15 / 18 / 20 · section 30→48 · hero 44→60 · display numbers 28–36 phone, 48–56 desktop
heroes; tracking −0.02 to −0.035em on large type. Four levels per view. Numbers carry the weight;
labels whisper. `text-wrap: balance` on headings, `pretty` on paragraphs.

## Space, radius, depth

8-point rhythm: 4 8 12 16 24 32 48 64 (80, 96 for page sections). Radius: 8 controls, 12 small
cards and tiles, 16 cards, 22 hero cards and sheets, 999 pills; nested radius = outer − gap.
Depth comes from three things only: glass with its highlight, the recess's inner shade, the clay's
drop shadow. Section rhythm on product pages: 64 phone, 96 desktop.

## Motion vocabulary

| Token | Value | Use |
|---|---|---|
| `--dur-feedback` | 100 ms | press, toggle, the "did it hear me" answer |
| `--dur-small` | 200 ms | hover, colour, state changes |
| `--dur-layout` | 350 ms | panels, sheets, reflow |
| `--dur-ceremony` | 650 ms | the win |
| `--dur-roll` | 760 ms | a number counting to its new value |
| `--ease-out` | (0.2, 0.8, 0.2, 1) | entering |
| `--ease-spring` | (0.3, 1.4, 0.4, 1) | anything the user touches, popovers arriving |
| `--ease-squish` | (0.3, 1.7, 0.4, 1) | a pressed control springing back past rest |
| `--ease-pop` | (0.2, 0.9, 0.3, 1.2) | a ceremony's pop |
| `--ease-weighted` | (0.22, 1, 0.36, 1) | marketing reveals (600–800 ms, Persuade only) |

Signature moves: press squish (scale .95 in 80 ms, spring back), magnetic primary button (leans
30% toward the pointer on fine pointers), the living orb (a breathing blob for "thinking"), count
rolls with tabular figures, the sliding clay pill on segmented controls, blur-in for page headings,
staggered arrivals (30–80 ms apart, capped), the word-by-word tagline reveal, the countdown ring.
Only transform, opacity and filter move. Reduced motion keeps every change as a fade or an instant
swap, never loses information.

## Do not

Clay on labels or badges · neumorphism on text or cards · hard glows · gradient backgrounds on
cards · gradient text outside the wordmark and gamer display · emoji as icons (one icon family,
Phosphor) · layout shift when data arrives · a disabled button that does not say why ·
fake progress · invented proof.
