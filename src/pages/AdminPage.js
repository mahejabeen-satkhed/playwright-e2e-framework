class AdminPage{
    constructor(page){
        this.page=page;
        this.adminHeader = page.locator('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
    }

    async goto(){
        await this.page.goto('/web/index.php/admin/viewSystemUsers');
    }

}

module.exports = { AdminPage };