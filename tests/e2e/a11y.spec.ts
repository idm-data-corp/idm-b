import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/* Accessibility checks. We run axe-core against a representative page
   per archetype:
     - Marketing landing (Home)
     - Pillar overview (Banking)
     - Sub-product (Card issuing)
     - Customer story (Northbank)
     - Customers index
     - Pricing
     - Trust legal page (Privacy - has the OnThisPage TOC + tables)
     - Event page (Connect 2026)
     - 404

   Fail on `serious` and `critical` violations only. We don't fail on
   `moderate` or `minor` (they're tracked but tend to be noisy on
   marketing sites and are manually triaged). The rule list is the
   default WCAG 2.1 AA set bundled with axe-core. */

const PAGES = [
  '/',
  '/banking',
  '/banking/cards',
  '/customers',
  '/customers/northbank',
  '/pricing',
  '/trust/privacy',
  '/events/connect-2026',
  '/this-page-does-not-exist',
];

for (const path of PAGES) {
  test(`a11y: ${path} has no serious or critical violations`, async ({ page }) => {
    await page.goto(path);
    /* Wait for any hydration-time aria changes. */
    await page.waitForLoadState('networkidle');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    const blocking = results.violations.filter(
      (v) => v.impact === 'serious' || v.impact === 'critical',
    );

    if (blocking.length > 0) {
      const summary = blocking
        .map((v) => `  - [${v.impact}] ${v.id}: ${v.help} (${v.nodes.length} node${v.nodes.length === 1 ? '' : 's'})`)
        .join('\n');
      console.log('axe violations on ' + path + ':\n' + summary);
    }

    expect(blocking, 'serious/critical a11y violations').toEqual([]);
  });
}
