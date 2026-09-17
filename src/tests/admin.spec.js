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

//TC-ID : ADMIN-03
test('Verfiy search user',async({},testInfo)=> {
    const page= testInfo.page

    const homePage = new HomePage(page)
    await expect(homePage.welcomeMessage).toBeVisible()

    await homePage.clickNavigationLink('Admin')

    const adminPage = new AdminPage(page)
    await expect(adminPage.adminHeader).toBeVisible()

    console.log('Admin page loaded successfully');

    await adminPage.userName.fill("Admin")

    await adminPage.searchBtn.click()

    await expect(adminPage.recordFound).toBeVisible()

    await expect(adminPage.searchedRecord).toBeVisible()
})

//TC-ID : ADMIN-04

test('Verify add user form loads', async({},testInfo)=>{

    const page = testInfo.page

    const homePage = new HomePage(page)
    await expect(homePage.welcomeMessage).toBeVisible()

    homePage.clickNavigationLink("Admin")

    const adminPage = new AdminPage(page)
    await expect(adminPage.adminHeader).toBeVisible()

    console.log('Admin page loaded successfully');

    await adminPage.addUserBtn.click()

    await page.waitForLoadState('networkidle')

    await expect(adminPage.addUserForm).toBeVisible()

   // await page.waitForTimeout(2000);

})

//TC-ID : ADMIN-05

test('Verify add user with valid data', async({},testInfo)=>{

    const page = testInfo.page

    const homePage = new HomePage(page)
    await expect(homePage.welcomeMessage).toBeVisible()

    homePage.clickNavigationLink("Admin")

    const adminPage = new AdminPage(page)
    await expect(adminPage.adminHeader).toBeVisible()

    console.log('Admin page loaded successfully');

    await adminPage.addUserBtn.click()

    await page.waitForLoadState('networkidle')

    await expect(adminPage.addUserForm).toBeVisible()

    await adminPage.userRole.click()

    await page.locator("//div[contains(@class,'oxd-select-option')][contains(., 'Admin')]").click();

    await adminPage.status.click()

    await page.locator("//div[contains(@class,'oxd-select-option')][contains(., 'Enabled')]").click();

    await adminPage.employeeName.fill('Amazing')

    await adminPage.userName.fill("Tester123")

    await adminPage.password.fill("test1234")

    await adminPage.confirmPass.fill("test1234")

    await page.waitForTimeout(2000);

})