import { test, expect, devices } from '@playwright/test';

/* Mobile-only smoke: hamburger → drawer → drawer-link → route changes.
   Lives in its own file because `test.use(devices[...])` forces a new
   browser configuration which Playwright disallows inside describe(). */

test.use({ ...devices['iPhone 14'] });

test('hamburger opens drawer; nav item routes correctly', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /Open menu/i }).click();
  await expect(page.getByRole('dialog', { name: /Site navigation/i })).toBeVisible();
  /* Pricing is a plain link in the drawer (not a menu accordion). */
  await page.getByRole('link', { name: /^Pricing/ }).click();
  await expect(page).toHaveURL(/\/pricing$/);
});

test('Banking accordion expands and routes to a sub-product', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /Open menu/i }).click();
  await page.getByRole('button', { name: /^Banking$/ }).click();
  /* Categories are revealed; click into Card issuing & processing. */
  await page.getByRole('link', { name: /Card issuing & processing/i }).first().click();
  await expect(page).toHaveURL(/\/banking\/cards/);
});
