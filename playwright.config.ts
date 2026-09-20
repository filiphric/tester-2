import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: false,
  workers: 1,
  timeout: 45000,
  use: {
    baseURL: 'http://127.0.0.1:3040',
    browserName: 'chromium',
    channel: process.env.PLAYWRIGHT_CHANNEL || 'chromium',
    viewport: { width: 1280, height: 720 },
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'preview' },
    {
      name: 'development',
      testMatch: '**/audience-navigation.spec.ts',
      use: { baseURL: 'http://localhost:3041' },
    },
  ],
  webServer: [
    {
      command: 'wrangler dev --local --ip 127.0.0.1 --port 1998',
      port: 1998,
      reuseExistingServer: false,
      timeout: 60000,
    },
    {
      command: 'npm run build -- --out .reactions-test-dist && vite preview --outDir .reactions-test-dist --port 3040 --host 127.0.0.1 --strictPort',
      env: { VITE_REACTIONS_HOST: '127.0.0.1:1998' },
      url: 'http://127.0.0.1:3040/live',
      reuseExistingServer: false,
      timeout: 120000,
    },
    {
      command: 'slidev --port 3041',
      env: { VITE_REACTIONS_HOST: '127.0.0.1:1998' },
      url: 'http://localhost:3041/live',
      reuseExistingServer: false,
      timeout: 60000,
    },
  ],
})
