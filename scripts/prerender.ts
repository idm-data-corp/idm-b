/**
 * Prerender all sitemap routes to static HTML.
 *
 * Each route gets its own dist/[path]/index.html so Cloudflare serves
 * real content to Googlebot without waiting for JavaScript execution.
 * Run automatically as part of `npm run build`.
 *
 * Usage (standalone): npm run prerender  (requires dist/ to already exist)
 */

import { chromium } from '@playwright/test';
import { readFileSync, mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { preview } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const PORT = 4175;
const CONCURRENCY = 5;

function extractPaths(): string[] {
  const xml = readFileSync(join(ROOT, 'public/sitemap.xml'), 'utf8');
  return (xml.match(/<loc>([^<]+)<\/loc>/g) ?? [])
    .map(m => m.replace(/<\/?loc>/g, '').trim())
    .map(u => new URL(u).pathname);
}

async function main(): Promise<void> {
  const paths = extractPaths();
  console.log(`\nPrerendering ${paths.length} routes (${CONCURRENCY} parallel)…\n`);

  const server = await preview({ preview: { port: PORT, open: false }, logLevel: 'silent' });
  const base = `http://localhost:${PORT}`;

  const browser = await chromium.launch();
  let ok = 0;
  let fail = 0;

  // Process in batches to avoid overwhelming the preview server
  for (let i = 0; i < paths.length; i += CONCURRENCY) {
    const batch = paths.slice(i, i + CONCURRENCY);
    await Promise.all(batch.map(async (path) => {
      const page = await browser.newPage();
      try {
        await page.goto(`${base}${path === '/' ? '' : path}`, {
          waitUntil: 'networkidle',
          timeout: 20000,
        });
        const html = await page.content();

        const outDir = path === '/' ? DIST : join(DIST, path.replace(/^\//, ''));
        mkdirSync(outDir, { recursive: true });
        writeFileSync(join(outDir, 'index.html'), html, 'utf8');
        console.log(`  ✓ ${path}`);
        ok++;
      } catch (err) {
        console.error(`  ✗ ${path}  — ${(err as Error).message}`);
        fail++;
      } finally {
        await page.close();
      }
    }));
  }

  await browser.close();
  server.httpServer.close();

  console.log(`\nPrerender: ${ok} ok, ${fail} failed.`);
  if (fail > 0) process.exit(1);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
