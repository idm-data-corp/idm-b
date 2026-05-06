import { defineConfig, devices } from '@playwright/test';

/* IDMB end-to-end + a11y test config.
   - Runs against the static `vite preview` build, not the dev server, so
     we test what users actually receive.
   - Two browser projects: chromium-desktop (1280x800) and chromium-mobile
     (iPhone 14 viewport). Add firefox / webkit when needed.
   - CI: starts the preview server itself; locally it reuses an already-
     running one.
   - Browser binaries are not auto-installed: run `npx playwright install
     chromium` once before the first run. */

const PORT = 4173;
const BASE_URL = process.env.PLAYWRIGHT_BASE_URL ?? `http://localhost:${PORT}`;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
  ],
  outputDir: 'test-results',

  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium-desktop',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 800 } },
    },
    {
      name: 'chromium-mobile',
      use: { ...devices['iPhone 14'] },
    },
  ],

  webServer: {
    command: 'npm run preview',
    url: `${BASE_URL}/`,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
