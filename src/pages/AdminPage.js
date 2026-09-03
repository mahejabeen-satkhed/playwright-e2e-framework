class AdminPage{
    constructor(page){
        this.page=page;
        this.adminHeader = page.locator('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
        this.userMngmtDD = page.locator("//span[normalize-space()='User Management']")
        this.userMngmtOptions = page.locator("//ul[@class='oxd-dropdown-menu']//a")
        this.userRecords = page.locator("//div[@class='oxd-table-card']")

    }

    async goto(){
        await this.page.goto('/web/index.php/admin/viewSystemUsers');
    }

    async clickUserManagementDropdown(){
        await this.userMngmtDD.click();
    }

    async getUserRecordsCount(){
        const usersCount = await this.userRecords.count();
        return usersCount
    }

}

module.exports = { AdminPage }; 