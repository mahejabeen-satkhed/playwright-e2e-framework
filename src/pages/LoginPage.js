class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { type: 'submit' });
    this.loggedInUser = page.locator('//p[@class="oxd-userdropdown-name"]');
    this.logoutDropdown = page.locator('//ul[@role="menu"]');
    this.logoutMenuItem=page.locator('//a[text()="Logout"]');
    this.logoutDdMenus = page.locator('//ul/li/a[@role="menuitem"]');
  }

  async goto() {
    await this.page.goto('/web/index.php/auth/login');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async logout() {
    await this.logoutMenuItem.click();
  }

  async logout_different_feature(){

  /*const options= await this.logoutDdMenus.allTextContents();

   console.log(options);*/

    const handles = await this.logoutDdMenus.elementHandles();
    
    for(let handle of handles)
    {
      const value = await handle.textContent();
      //console.log(value);
      if(value.includes('Logout'))
      {
        await handle.click();
        console.log(`${value} clicked successfully`);
      }
       
    }
  }
}

module.exports = { LoginPage };
