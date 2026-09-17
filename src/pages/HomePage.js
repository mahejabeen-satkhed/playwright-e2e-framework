class HomePage {
  constructor(page) {
    this.page = page;
    this.welcomeMessage = page.locator('//h6[normalize-space()="Dashboard"]');
    this.adminMenu = page.locator("//a[contains(@href,'viewAdminModule')]");
    this.PIMMenu = page.getByText('PIM');

  }

  async goto() {
    await this.page.goto('/web/index.php/dashboard/index');
  }

  async clickNavigationLink(linkText){

    await this.adminMenu.click();
    
  }


}

module.exports = { HomePage };
