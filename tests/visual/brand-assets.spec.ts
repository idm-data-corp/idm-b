import { test, expect, type Page } from '@playwright/test';

test.skip(({ browserName }) => browserName !== 'chromium', 'Brand asset snapshots run in Chromium.');

async function loadAsset(page: Page, src: string, width: number, height: number) {
  await page.setViewportSize({ width: Math.max(width + 80, 640), height: Math.max(height + 80, 640) });
  await page.goto('/');
  const absoluteSrc = new URL(src, page.url()).href;
  await page.setContent(`
    <style>
      html, body {
        margin: 0;
        background: #ffffff;
      }
      body {
        padding: 40px;
      }
      img {
        display: block;
      }
    </style>
    <img id="asset" src="${absoluteSrc}" width="${width}" height="${height}" alt="">
  `);

  const asset = page.locator('#asset');
  await expect(asset).toBeVisible();
  await expect(asset).toHaveJSProperty('complete', true);
  await expect(asset).toHaveJSProperty('naturalWidth', width);
  await expect(asset).toHaveJSProperty('naturalHeight', height);
  return asset;
}

test('visual: og image png', async ({ page }, testInfo) => {
  const asset = await loadAsset(page, '/og-image.png', 1200, 630);
  await expect(asset).toHaveScreenshot(`og-image-png-${testInfo.project.name}.png`, {
    maxDiffPixelRatio: 0.001,
  });
});

test('visual: og image svg', async ({ page }, testInfo) => {
  const asset = await loadAsset(page, '/og-image.svg', 1200, 630);
  await expect(asset).toHaveScreenshot(`og-image-svg-${testInfo.project.name}.png`, {
    maxDiffPixelRatio: 0.001,
  });
});

test('visual: logo svg', async ({ page }, testInfo) => {
  const asset = await loadAsset(page, '/logo.svg', 512, 512);
  await expect(asset).toHaveScreenshot(`logo-svg-${testInfo.project.name}.png`, {
    maxDiffPixelRatio: 0.001,
  });
});
