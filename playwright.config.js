const { defineConfig } = require('@playwright/test');
const env = require('./src/config/env.qa.json');

module.exports = defineConfig({
  testDir: './src/tests',
  timeout: 30000,
  retries: 1,
  use: {
    browserName: 'chromium',
    headless: false,
    baseURL: env.baseUrl,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },
  reporter: [
    ['html', { outputFolder: 'reports/html' }]
  ]
});
