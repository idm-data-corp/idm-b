import { test, expect } from '@playwright/test';

/* Visual regression — screenshots a representative page per archetype at
   both desktop and mobile widths. The first run creates the baseline
   snapshots in tests/visual/regression.spec.ts-snapshots/. Subsequent
   runs compare against the baseline and fail on any visible diff above
   the threshold.

   To re-bless after intentional changes:  npm run test:e2e -- --update-snapshots
*/

const PAGES = [
  '/',
  '/banking',
  '/banking/cards',
  '/customers/northbank',
  '/pricing',
  '/trust/privacy',
];

for (const path of PAGES) {
  test('visual: ' + path, async ({ page }, testInfo) => {
    await page.goto(path);
    await page.waitForLoadState('networkidle');
    /* Wait for fonts so screenshots aren't taken mid-FOUT. */
    await page.evaluate(() => document.fonts.ready);
    /* Disable any in-flight CSS animations + the cookie banner so the
       snapshot is deterministic. */
    await page.addStyleTag({
      content: '*, *::before, *::after { transition: none !important; animation: none !important; } .ck { display: none !important; }',
    });

    const slug = path === '/' ? 'home' : path.replace(/^\//, '').replace(/\//g, '-');
    const project = testInfo.project.name;
    await expect(page).toHaveScreenshot(slug + '-' + project + '.png', {
      fullPage: true,
      maxDiffPixelRatio: 0.01,
    });
  });
}
