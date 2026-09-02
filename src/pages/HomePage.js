class HomePage {
  constructor(page) {
    this.page = page;
    this.welcomeMessage = page.locator('//h6[normalize-space()="Dashboard"]');
    this.adminMenu = page.getByText('Admin');
    this.PIMMenu = page.getByText('PIM');

  }

  async goto() {
    await this.page.goto('/web/index.php/dashboard/index');
  }

  async clickNavigationLink(linkText){

    await this.page.getByText(linkText).click();
    
  }


}

module.exports = { HomePage };
