/**
 * Pings IndexNow (Bing, Yandex, Seznam) and Google/Bing sitemap endpoints
 * so every URL is queued for crawling immediately after deploy.
 *
 * Usage:  npm run ping
 *
 * IndexNow docs: https://www.indexnow.org/documentation
 * The key file must exist at: /b4f7a2e9c3d18456b4f7a2e9c3d18456.txt
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const SITE = 'https://www.idm-b.com';
const INDEXNOW_KEY = 'b4f7a2e9c3d18456b4f7a2e9c3d18456';

function extractUrls(): string[] {
  const xml = readFileSync(join(ROOT, 'public/sitemap.xml'), 'utf8');
  return (xml.match(/<loc>([^<]+)<\/loc>/g) ?? []).map(m =>
    m.replace(/<\/?loc>/g, '').trim()
  );
}

async function pingIndexNow(urls: string[]): Promise<void> {
  const res = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: 'www.idm-b.com',
      key: INDEXNOW_KEY,
      keyLocation: `${SITE}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  });
  console.log(`[IndexNow]  ${res.status} ${res.statusText}  (${urls.length} URLs submitted)`);
}

async function main(): Promise<void> {
  const urls = extractUrls();
  if (urls.length === 0) {
    console.error('No URLs found in public/sitemap.xml — aborting.');
    process.exit(1);
  }
  console.log(`Submitting ${urls.length} URLs to search engine indexing APIs…\n`);

  // IndexNow covers Bing, Yandex, and Seznam.
  // Google deprecated its sitemap ping in 2023 — it discovers via robots.txt.
  await pingIndexNow(urls);

  console.log('\nDone. URLs are queued for indexing.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
