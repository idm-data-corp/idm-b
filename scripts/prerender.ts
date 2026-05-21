/**
 * For each route, write a dist/[path]/index.html with the correct
 * <title>, <meta description>, canonical URL and Open Graph tags
 * injected from the route metadata in src/lib/routes.ts.
 *
 * No browser required — runs in plain Node.js on any platform including
 * Cloudflare Pages build workers.
 *
 * Usage: npm run prerender  (requires vite build to have run first)
 */

import { readFileSync, mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { ROUTES } from '../src/lib/routes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const SITE = 'https://www.idm-b.com';

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function inject(template: string, title: string, description: string, path: string): string {
  const url = `${SITE}${path}`;
  return template
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/,      `$1${esc(description)}$2`)
    .replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,    `$1${esc(title)}$2`)
    .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,`$1${esc(description)}$2`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/,     `$1${esc(title)}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/,`$1${esc(description)}$2`)
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/,       `$1${url}$2`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/,             `$1${url}$2`);
}

function main(): void {
  const template = readFileSync(join(DIST, 'index.html'), 'utf8');
  const routes = ROUTES.filter(r => r.path !== '/' && !r.noIndex);

  console.log(`\nPrerendering ${routes.length} routes…\n`);
  let ok = 0;

  for (const route of routes) {
    const html = inject(template, route.title, route.description, route.path);
    const outDir = join(DIST, route.path.replace(/^\//, ''));
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), html, 'utf8');
    console.log(`  ✓ ${route.path}`);
    ok++;
  }

  console.log(`\nPrerender: ${ok} routes done.`);
}

main();
