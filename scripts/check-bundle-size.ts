/* Bundle-size CI guard - fails the build if the entry shell exceeds the
   docs/PLAN.md section 12 budgets, or warns if any single lazy chunk exceeds
   the per-chunk ceiling.

   The "entry shell" is what every page pays for on first paint. We read
   dist/index.html to find the exact set of script/link URLs the browser
   loads on the initial document - that's the only authoritative list
   (filename hashes change between builds, and several lazy chunks happen
   to start with "index" because they came from pages star Index.tsx).

   Per-route lazy chunks are size-checked individually with a softer
   per-chunk ceiling so a runaway page can be caught without failing the
   whole shell budget. */

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { resolve, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, '..', 'dist');
const ASSETS = resolve(DIST, 'assets');
const INDEX_HTML = resolve(DIST, 'index.html');

/* Budgets (sourced from docs/PLAN.md section 12).

   shellJsKb includes the entry chunk + the shared react/react-dom/
   react-router-dom vendor chunk. The original docs/PLAN.md budget was 90 kB
   based on react+react-dom only; React Router 7 plus the MDX runtime
   adopted in Phase 3 push the floor a few kB higher. 96 kB is the
   "live with regressions" figure; below this is what every page pays
   for on first paint. */
const BUDGET = {
  shellJsKb: 96,
  shellCssKb: 20,
  perChunkJsKb: 40,
  perChunkCssKb: 8,
};

const KB = 1024;

const ESC = String.fromCharCode(27);
function colour(s: string, code: string): string {
  if (!process.stdout.isTTY) return s;
  return ESC + '[' + code + 'm' + s + ESC + '[0m';
}
const red = (s: string) => colour(s, '31');
const green = (s: string) => colour(s, '32');
const yellow = (s: string) => colour(s, '33');
const dim = (s: string) => colour(s, '2');
const bold = (s: string) => colour(s, '1');

function gzipSize(p: string): number {
  return gzipSync(readFileSync(p)).length;
}

function fmt(bytes: number): string {
  return (bytes / KB).toFixed(2) + ' kB';
}

function safeStat(p: string) {
  try { return statSync(p); } catch { return null; }
}

function main(): void {
  const distStat = safeStat(ASSETS);
  const htmlStat = safeStat(INDEX_HTML);
  if (!distStat || !distStat.isDirectory() || !htmlStat || !htmlStat.isFile()) {
    console.error(red('FAIL: ' + DIST + ' is not a built dist - run vite build first.'));
    process.exit(2);
  }

  const html = readFileSync(INDEX_HTML, 'utf-8');
  const refs = new Set<string>();
  const re = /(?:src|href)=["']\/?assets\/([^"']+)["']/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    refs.add(m[1]);
  }
  if (refs.size === 0) {
    console.error(red('FAIL: could not parse any /assets/ references from dist/index.html.'));
    process.exit(2);
  }

  const shellJsFiles = Array.from(refs).filter((f) => f.endsWith('.js'));
  const shellCssFiles = Array.from(refs).filter((f) => f.endsWith('.css'));

  let shellJs = 0;
  let shellCss = 0;
  for (const f of shellJsFiles)  shellJs  += gzipSize(resolve(ASSETS, f));
  for (const f of shellCssFiles) shellCss += gzipSize(resolve(ASSETS, f));

  console.log('');
  console.log(bold('IDMB bundle-size guard') + dim('  (gzipped)'));
  console.log(dim('-------------------------------------------------------'));

  const shellJsList = shellJsFiles.length ? shellJsFiles.join(', ') : '(none)';
  const shellCssList = shellCssFiles.length ? shellCssFiles.join(', ') : '(none)';

  console.log('  ' + dim('shell JS  = ') + shellJsList);
  console.log('             ' + fmt(shellJs) + '  / budget ' + BUDGET.shellJsKb + ' kB');
  console.log('  ' + dim('shell CSS = ') + shellCssList);
  console.log('             ' + fmt(shellCss) + '  / budget ' + BUDGET.shellCssKb + ' kB');

  let failed = 0;
  let warnings = 0;

  if (shellJs > BUDGET.shellJsKb * KB) {
    console.log('');
    console.log(red('  FAIL  shell JS over budget: ' + fmt(shellJs) + ' > ' + BUDGET.shellJsKb + ' kB'));
    failed++;
  } else {
    console.log('  ' + green('OK    shell JS within budget'));
  }
  if (shellCss > BUDGET.shellCssKb * KB) {
    console.log(red('  FAIL  shell CSS over budget: ' + fmt(shellCss) + ' > ' + BUDGET.shellCssKb + ' kB'));
    failed++;
  } else {
    console.log('  ' + green('OK    shell CSS within budget'));
  }

  /* Lazy chunks: every file in dist/assets that is NOT in the shell set. */
  const all = readdirSync(ASSETS);
  const lazyJs = all.filter((f) => f.endsWith('.js') && !refs.has(f));
  const lazyCss = all.filter((f) => f.endsWith('.css') && !refs.has(f));

  console.log('');
  console.log(dim('Lazy-chunk ceilings (warn on overage):'));

  const overJs = lazyJs
    .map((f) => ({ name: f, size: gzipSize(resolve(ASSETS, f)) }))
    .filter((c) => c.size > BUDGET.perChunkJsKb * KB)
    .sort((a, b) => b.size - a.size);
  const overCss = lazyCss
    .map((f) => ({ name: f, size: gzipSize(resolve(ASSETS, f)) }))
    .filter((c) => c.size > BUDGET.perChunkCssKb * KB)
    .sort((a, b) => b.size - a.size);

  if (overJs.length === 0 && overCss.length === 0) {
    const counts = '(' + lazyJs.length + ' JS + ' + lazyCss.length + ' CSS)';
    console.log('  ' + green('OK    every lazy chunk within ceiling ' + counts));
  } else {
    for (const c of overJs) {
      console.log('  ' + yellow('WARN  ' + basename(c.name) + ': ' + fmt(c.size) + ' > ' + BUDGET.perChunkJsKb + ' kB'));
      warnings++;
    }
    for (const c of overCss) {
      console.log('  ' + yellow('WARN  ' + basename(c.name) + ': ' + fmt(c.size) + ' > ' + BUDGET.perChunkCssKb + ' kB'));
      warnings++;
    }
  }

  console.log(dim('-------------------------------------------------------'));
  if (failed > 0) {
    const violations = failed + ' budget violation' + (failed === 1 ? '' : 's') + '.';
    const warns = warnings ? '  (' + warnings + ' warning' + (warnings === 1 ? '' : 's') + ')' : '';
    console.log('');
    console.log(red('FAIL: ' + violations) + dim(warns));
    process.exit(1);
  }
  const warns = warnings ? '  ' + warnings + ' chunk warning' + (warnings === 1 ? '' : 's') + ' above.' : '';
  console.log('');
  console.log(green('OK: all budgets met.') + (warns ? yellow(warns) : ''));
}

main();
