class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { type: 'submit' });
    this.loggedInUser = page.locator('//p[@class="oxd-userdropdown-name"]');
    this.logoutDropdown = page.locator('//ul[@role="menu"]');
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
    await this.logoutDropdown.locator('li a').getByRole('link', { name: 'Logout' }).click();
  }
}

module.exports = { LoginPage };
