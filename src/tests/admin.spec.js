const{test, expect} = require('@playwright/test');
const { getValidUser } = require('../utils/testData');
const{AdminPage} = require('../pages/AdminPage.js');
const{LoginPage} = require('../pages/LoginPage.js');
const{HomePage} = require('../pages/HomePage.js');
const { beforeAll, beforeEach } = require('./hooks/testHooks');



//TC-ID : ADMIN-01
test('Verify Admin page loads', async({},testInfo) => {

    const page = testInfo.page;
    
    const homePage = new HomePage(page);
    await expect(homePage.welcomeMessage).toBeVisible();

    await homePage.clickNavigationLink('Admin');

    const adminPage = new AdminPage(page);
    await expect(adminPage.adminHeader).toBeVisible();

    console.log('Admin page loaded successfully');
})

//TC-ID : ADMIN-02
test('Verify user mngmt section', async({}, testInfo) => {
    const page = testInfo.page;
    
    const homePage = new HomePage(page);
    await expect(homePage.welcomeMessage).toBeVisible();

    await homePage.clickNavigationLink('Admin');

    const adminPage = new AdminPage(page);
    await expect(adminPage.adminHeader).toBeVisible();

    console.log('Admin page loaded successfully');

    await adminPage.clickUserManagementDropdown();

    await adminPage.userMngmtOptions.first().click();

    await page.waitForLoadState('networkidle');

    const userCount = await adminPage.getUserRecordsCount();
  
    console.log(`Total user records: ${userCount}`);

    expect(userCount).toBeGreaterThan(0);

})
