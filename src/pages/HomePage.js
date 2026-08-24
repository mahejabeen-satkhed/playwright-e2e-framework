class HomePage {
  constructor(page) {
    this.page = page;
    this.welcomeMessage = page.getByText('Dashboard');
  }

  async goto() {
    await this.page.goto('/web/index.php/dashboard/index');
  }
}

module.exports = { HomePage };
