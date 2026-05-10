/* Generates public/sitemap.xml from src/lib/routes.ts.
   Run as part of `npm run build` (see package.json). */

import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  /* Import the route registry. We re-implement only the bits we need from
     site.ts and links.ts so this script doesn't pull import.meta.env. */
  const { ROUTES } = await import('../src/lib/routes.ts');
  const today = new Date().toISOString().slice(0, 10);
  const SITE_URL = 'https://www.idm-b.com';

  const urls = ROUTES
    /* Skip pages that just bounce to a portal or are explicitly hidden. */
    .filter((r) => !r.portalRedirect && !r.noIndex)
    .map((r) => {
      const loc = `${SITE_URL}${r.path === '/' ? '' : r.path}`;
      const changefreq = r.changefreq ?? 'monthly';
      const priority = (r.priority ?? 0.5).toFixed(1);
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    '',
  ].join('\n');

  const outPath = resolve(__dirname, '..', 'public', 'sitemap.xml');
  writeFileSync(outPath, xml);
  console.log(`sitemap.xml written with ${ROUTES.filter((r) => !r.portalRedirect && !r.noIndex).length} URLs`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
