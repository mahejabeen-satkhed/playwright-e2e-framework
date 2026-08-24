const base = require('@playwright/test');
const env = require('../config/env.qa.json');

exports.test = base.test.extend({
  authPage: async ({ page }, use) => {
    await page.goto('/login');
    await page.getByTestId('username').fill(env.username);
    await page.getByTestId('password').fill(env.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await use(page);
  }
});
