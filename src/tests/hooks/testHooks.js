const {test , expect} = require('@playwright/test')
const { LoginPage } = require('../../pages/LoginPage.js');
const { HomePage } = require('../../pages/HomePage.js');
const { getValidUser } = require('../../utils/testData.js')

//this file contains the hooks which will be executed before and after each test case
let page

test.beforeEach(async ({browser}, testInfo) => {
    console.log('Before each test case');

    page = await browser.newPage();

    const loginPage = new LoginPage(page);
    const user = getValidUser();

    await loginPage.goto();
    await loginPage.login(user.username, user.password);

       // Now create HomePage object
    const homePage = new HomePage(page);

        // Optional: verify you're on the home page
    await expect(homePage.welcomeMessage).toBeVisible();

     // Attach objects to testInfo
     testInfo.page = page;
     testInfo.homePage = homePage;
    

    console.log('Login successful, HomePage loaded');

})

test.afterEach(async () => {
    console.log('After each test case');
    
})