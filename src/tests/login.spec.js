const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage.js');
const { getValidUser } = require('../utils/testData');

test('User can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const user = getValidUser();

  await loginPage.goto();
  await loginPage.login(user.username, user.password);

  const loggedInUser = await loginPage.loggedInUser.textContent();
  await expect(page.getByText(loggedInUser)).toBeVisible();

  console.log(`User ${loggedInUser} logged in successfully`);
});

test('User can logout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const user = getValidUser();

  await loginPage.goto();
  await loginPage.login(user.username, user.password);

  const loggedInUser = await loginPage.loggedInUser.textContent();
  await expect(page.getByText(loggedInUser)).toBeVisible();

  await loginPage.loggedInUser.click();
  await expect(loginPage.logoutDropdown).toBeVisible();
  await loginPage.logout();

  console.log(`User ${loggedInUser} logged out successfully`);
});

//Logout using different method
test('User logout using different features',async({page}) => {

  const loginPage = new LoginPage(page)
  const user=getValidUser();

  await loginPage.goto();
  await loginPage.login(user.username,user.password)

  await loginPage.loggedInUser.click();
  await expect(loginPage.logoutDropdown).toBeVisible();

  await loginPage.logout_different_feature();


})

test('Invalid user login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const user = { username: 'invalidUser', password: 'invalidPass' };

  await loginPage.goto();
  await loginPage.login(user.username, user.password);

  await expect(page.getByText('Invalid credentials')).toBeVisible();
});
