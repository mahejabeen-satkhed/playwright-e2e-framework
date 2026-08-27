const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage.js');
const { getValidUser } = require('../utils/testData');

test('User can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const user = getValidUser();

  await loginPage.goto();
  await loginPage.login(user.username, user.password);

  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

});

test('Invalid User login',async ({ page })=>{
  const loginPage = new LoginPage(page);
  const user = { username: 'invalidUser', password: 'invalidPass' };

  await loginPage.goto();
  await loginPage.login(user.username, user.password);

  await expect(page.getByText('Invalid credentials')).toBeVisible();

});
