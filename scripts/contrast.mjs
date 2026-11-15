#!/usr/bin/env node
// WCAG 2 contrast between two colours, no dependencies.
//
//   node contrast.mjs "<foreground>" "<background>" [--over "<base>"]
//   node contrast.mjs --hue 287 [--clay-l -0.09]   # the kit's light inks and clay label for an accent hue
//
// Colours: #rgb, #rrggbb, #rrggbbaa, rgb()/rgba(), oklch(L C H [/ a]). A translucent colour is
// composited over --over (default white for the background, the background for the foreground),
// which is how glass is measured. Passes: 4.5 body text, 3 large text (≥ 24px, or 18.66px bold) and UI.

const args = process.argv.slice(2);
const opt = (k) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : undefined; };

function parse(s) {
  s = s.trim().toLowerCase();
  let m;
  if ((m = s.match(/^#([0-9a-f]{3,8})$/))) {
    let h = m[1];
    if (h.length <= 4) h = [...h].map((c) => c + c).join('');
    const n = (i) => parseInt(h.slice(i, i + 2), 16) / 255;
    return [n(0), n(2), n(4), h.length === 8 ? n(6) : 1];
  }
  if ((m = s.match(/^rgba?\(([^)]+)\)$/))) {
    const p = m[1].split(/[\s,/]+/).filter(Boolean).map((v) => (v.endsWith('%') ? parseFloat(v) / 100 : parseFloat(v)));
    return [p[0] / 255, p[1] / 255, p[2] / 255, p[3] ?? 1];
  }
  if ((m = s.match(/^oklch\(([^)]+)\)$/))) {
    const p = m[1].split(/[\s/]+/).filter(Boolean);
    const L = p[0].endsWith('%') ? parseFloat(p[0]) / 100 : parseFloat(p[0]);
    const C = parseFloat(p[1]), H = (parseFloat(p[2]) * Math.PI) / 180;
    const a = p[3] ? (p[3].endsWith('%') ? parseFloat(p[3]) / 100 : parseFloat(p[3])) : 1;
    return [...oklabToSrgb(L, C * Math.cos(H), C * Math.sin(H)), a];
  }
  throw new Error(`Cannot read colour: ${s}`);
}

function oklabToSrgb(L, a, b) {
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  const lin = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
  return lin.map((c) => { c = Math.min(1, Math.max(0, c)); return c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055; });
}

const over = (fg, bg) => [0, 1, 2].map((i) => fg[i] * fg[3] + bg[i] * (1 - fg[3])).concat(1);
const lum = ([r, g, b]) => { const f = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4); return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const hex = (c) => '#' + c.slice(0, 3).map((v) => Math.round(v * 255).toString(16).padStart(2, '0')).join('');
const verdict = (r) => (r >= 7 ? 'AAA' : r >= 4.5 ? 'AA' : r >= 3 ? 'AA large/UI only' : 'FAIL');

function check(fgS, bgS, baseS = '#ffffff') {
  const base = parse(baseS);
  const bg = over(parse(bgS), base);
  const fg = over(parse(fgS), bg);
  const r = ratio(fg, bg);
  console.log(`${fgS} on ${bgS}${parse(bgS)[3] < 1 ? ` (over ${baseS})` : ''}: ${r.toFixed(2)}:1  ${verdict(r)}   [${hex(fg)} on ${hex(bg)}]`);
  return r;
}

const hue = opt('hue');
if (hue !== undefined) {
  const h = Number(hue);
  const cl = Number(opt('clay-l') ?? 0);
  const page = `oklch(0.97 0.011 ${h + 4})`, glass = 'rgba(255,255,255,0.68)';
  console.log(`Light mode, hue ${h} (glass over the page):`);
  for (const [name, c] of [['strong ink', `oklch(0.214 0.075 ${h - 6})`], ['default ink', `oklch(0.301 0.071 ${h - 4})`], ['muted ink', `oklch(0.485 0.049 ${h})`]]) {
    process.stdout.write(`  ${name.padEnd(12)} `); check(c, glass, page);
  }
  process.stdout.write('  white on clay   '); if (check('#ffffff', `oklch(${0.57 + cl} 0.25 ${h + 9})`) < 4.5) console.log('  → white labels fail on this clay: set --clay-l (try -0.09) and re-run with --clay-l -0.09');
  console.log('Pick --ac-light by measuring it on white (≥ 4.5) and --ac-dark on #0b0a12 (≥ 4.5).');
} else if (args.length >= 2) {
  const r = check(args[0], args[1], opt('over'));
  process.exit(r >= 4.5 ? 0 : 1);
} else {
  console.log('usage: contrast.mjs <fg> <bg> [--over <base>]  |  contrast.mjs --hue <0-360>');
}
