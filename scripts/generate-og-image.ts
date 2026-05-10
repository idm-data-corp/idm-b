import { chromium } from '@playwright/test';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

async function generateOgImage() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });

  const svgPath = join(process.cwd(), 'public', 'og-image.svg');
  const pngPath = join(process.cwd(), 'public', 'og-image.png');

  const svgContent = readFileSync(svgPath, 'utf-8');

  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          html, body {
            margin: 0;
            padding: 0;
            width: 1200px;
            height: 630px;
            overflow: hidden;
          }
        </style>
      </head>
      <body>${svgContent}</body>
    </html>
  `);

  await page.waitForLoadState('networkidle');

  const screenshot = await page.screenshot({
    type: 'png',
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  });

  writeFileSync(pngPath, screenshot);
  console.log(`Generated ${pngPath}`);

  await browser.close();
}

generateOgImage().catch(console.error);
