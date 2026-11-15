#!/usr/bin/env node
// Screenshot a page in every mode, accent and size, and report what a look at the images must not miss.
//
//   node capture.mjs --url http://localhost:3000/ --out shots \
//     [--modes light,dark,gamer] [--accents amethyst,jade] [--sizes 390x844,1440x900 | matrix]
//     [--reduced-motion] [--no-scroll] [--viewport-only] [--hide '.css, .selectors']
//
// --url may be a local file path (the template, a built page). Modes and accents are set as
// data-mode / data-accent on <html> before the page's scripts run (jojo-kit.css reads them); a site
// with its own theme switch can pass --mode-key <localStorage key> to set that instead.
// Writes <name>-<size>-<mode>[-<accent>][-rm].png and report.json: horizontal overflow at each size,
// console errors, failed requests. Needs Playwright: `npm i -D playwright && npx playwright install chromium`.
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : d; };
const flag = (k) => args.includes(`--${k}`);

// Playwright from beside this script, or from the project it is run in (the usual case for an installed skill).
let chromium;
try { ({ chromium } = await import('playwright')); }
catch {
  try { ({ chromium } = createRequire(join(process.cwd(), 'package.json'))('playwright')); }
  catch { console.error('Playwright not found. In your project run: npm i -D playwright && npx playwright install chromium'); process.exit(2); }
}

const MATRIX = '360x740,390x844,768x1024,1024x768,1440x900,1920x1080';
const rawUrl = opt('url');
if (!rawUrl) { console.error('--url is required'); process.exit(2); }
const url = /^https?:|^file:/.test(rawUrl) ? rawUrl : pathToFileURL(resolve(rawUrl)).href;
const out = resolve(opt('out', 'shots'));
const modes = opt('modes', 'light').split(',');
const accents = opt('accents', '').split(',').filter(Boolean);
const sizesArg = opt('sizes', '390x844,1440x900');
const sizes = (sizesArg === 'matrix' ? MATRIX : sizesArg).split(',').map((s) => { const [w, h] = s.split('x').map(Number); return { width: w, height: h || 900 }; });
const reduced = flag('reduced-motion');
const modeKey = opt('mode-key');
const name = opt('name', new URL(url).pathname.split('/').filter(Boolean).pop()?.replace(/\.\w+$/, '') || 'index');
mkdirSync(out, { recursive: true });

const report = [];
const browser = await chromium.launch();
for (const mode of modes) for (const accent of accents.length ? accents : [null]) {
  const context = await browser.newContext({ reducedMotion: reduced ? 'reduce' : 'no-preference', colorScheme: mode === 'light' ? 'light' : 'dark' });
  await context.addInitScript(({ mode, accent, modeKey }) => {
    const set = () => { const d = document.documentElement; d.setAttribute('data-mode', mode); if (accent) d.setAttribute('data-accent', accent); };
    if (modeKey) try { localStorage.setItem(modeKey, mode); } catch {}
    if (document.documentElement) set(); else document.addEventListener('readystatechange', set, { once: true });
  }, { mode, accent, modeKey });
  const page = await context.newPage();
  for (const size of sizes) {
    const errors = [];
    page.removeAllListeners('console'); page.removeAllListeners('requestfailed');
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 200)); });
    page.on('requestfailed', (r) => errors.push(`request failed: ${r.url().slice(0, 120)}`));
    await page.setViewportSize(size);
    await page.goto(url, { waitUntil: 'load' });
    await page.evaluate((m) => document.documentElement.setAttribute('data-mode', m), mode);
    await page.waitForTimeout(600);
    if (!flag('no-scroll')) {
      // Walk the page so IntersectionObserver reveals fire, then return to the top.
      await page.evaluate(async () => {
        const step = Math.max(200, Math.floor(innerHeight * 0.6));
        for (let y = 0; y < document.documentElement.scrollHeight; y += step) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 80)); }
        scrollTo(0, 0);
      });
      await page.waitForTimeout(900);
    }
    const hide = opt('hide');
    if (hide) await page.addStyleTag({ content: `${hide} { display: none !important; }` });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    const file = `${name}-${size.width}x${size.height}-${mode}${accent ? `-${accent}` : ''}${reduced ? '-rm' : ''}.png`;
    await page.screenshot({ path: join(out, file), fullPage: !flag('viewport-only'), animations: 'disabled' });
    report.push({ file, mode, accent, ...size, horizontalOverflowPx: overflow, errors });
    console.log(`${file}${overflow > 0 ? `  ⚠ scrolls sideways by ${overflow}px` : ''}${errors.length ? `  ⚠ ${errors.length} console error(s)` : ''}`);
  }
  await context.close();
}
await browser.close();
writeFileSync(join(out, 'report.json'), JSON.stringify(report, null, 2));
const bad = report.filter((r) => r.horizontalOverflowPx > 0 || r.errors.length);
console.log(`\n${report.length} shots in ${out}. ${bad.length ? `${bad.length} need attention (report.json).` : 'No overflow, no console errors.'} Now look at every image.`);
