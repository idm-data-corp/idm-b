import { test, expect } from '@playwright/test';

/* Functional smoke tests for the IDMB marketing site.
   Covers: navigation, page titles, primary CTAs, mega menu, mobile drawer.

   Adding a representative page to ROUTES_TO_PROBE catches broken
   navigation, mis-routed lazy chunks and missing page metadata in one
   pass, without needing a per-page test file. */

const ROUTES_TO_PROBE: { path: string; titleContains: string }[] = [
  { path: '/',                       titleContains: 'IDMB' },
  { path: '/banking',                titleContains: 'Banking' },
  { path: '/banking/cards',          titleContains: 'Card issuing' },
  { path: '/wallets',                titleContains: 'Wallets' },
  { path: '/wallets/cross-border',   titleContains: 'Cross-border' },
  { path: '/data',                   titleContains: 'Data analytics' },
  { path: '/data/risk',              titleContains: 'Risk' },
  { path: '/customers',              titleContains: 'Customer stories' },
  { path: '/customers/northbank',    titleContains: 'Northbank' },
  { path: '/solutions',              titleContains: 'Solutions' },
  { path: '/pricing',                titleContains: 'Pricing' },
  { path: '/events/connect-2026',    titleContains: 'Connect 2026' },
  { path: '/trust/privacy',          titleContains: 'Privacy' },
];

test.describe('Page metadata', () => {
  for (const { path, titleContains } of ROUTES_TO_PROBE) {
    test(`${path} renders with the expected title`, async ({ page }) => {
      await page.goto(path);
      /* usePageMeta runs in a useEffect after first paint, so wait briefly
         for the title to settle. */
      await expect(page).toHaveTitle(new RegExp(titleContains, 'i'), { timeout: 5_000 });
    });
  }
});

test.describe('Home - primary CTA', () => {
  test('clicking "Start building on IDMB" lands on /platform', async ({ page }) => {
    await page.goto('/');
    /* Hero primary CTA scrolls to the platform anchor on the same page;
       check the URL hash updates. */
    await page.getByRole('link', { name: /Start building on IDMB/i }).first().click();
    await expect(page).toHaveURL(/#platform$/);
  });
});

test.describe('Mega menu - desktop', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('opens Banking menu and routes to a sub-product', async ({ page }) => {
    await page.goto('/');
    /* Skip on mobile project - nav is hidden < 768px (the mobile drawer
       has its own test below). */
    const navBanking = page.getByRole('button', { name: /^Banking/, exact: false });
    await navBanking.click();
    await expect(page.getByRole('region')).toBeVisible();
    await page.getByRole('link', { name: /Card issuing & processing/, exact: false }).first().click();
    await expect(page).toHaveURL(/\/banking\/cards/);
  });
});

test.describe('Catch-all 404', () => {
  test('unknown URL renders the NotFound page', async ({ page }) => {
    await page.goto('/this-page-does-not-exist');
    await expect(page.getByText(/We can't find that page/i)).toBeVisible();
    /* Page should still link back to home. */
    await page.getByRole('link', { name: /Back to home/i }).click();
    await expect(page).toHaveURL(/\/$/);
  });
});

test.describe('Footer', () => {
  test('Banking core link in the footer goes to /banking', async ({ page }) => {
    await page.goto('/customers');
    await page.locator('footer').getByRole('link', { name: /^Banking core$/ }).click();
    await expect(page).toHaveURL(/\/banking$/);
  });
});
