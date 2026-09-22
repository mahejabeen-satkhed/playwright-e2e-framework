class AdminPage{
    constructor(page){
        this.page=page;
        this.adminHeader = page.locator('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
        this.userMngmtDD = page.locator("//span[normalize-space()='User Management']")
        this.userMngmtOptions = page.locator("//ul[@class='oxd-dropdown-menu']//a")
        this.userRecords = page.locator("//div[@class='oxd-table-card']")
        this.userName = page.locator("//label[text()='Username']/following::input[1]")
        this.searchBtn = page.locator("//button[normalize-space()='Search']")
        this.searchedRecord = page.locator("(//div[text()='Admin'])[1]")
        this.recordFound = page.locator("//span[normalize-space()='(1) Record Found']")
        this.addUserBtn = page.locator("//button[normalize-space()='Add']")
        this.addUserForm = page.locator("//h6[normalize-space()='Add User']")
        this.employeeName = page.locator("//input[@placeholder='Type for hints...']")
        this.password = page.locator("//label[text()='Password']/following::input[1]")
        this.confirmPass = page.locator("//label[text()='Confirm Password']/following::input[1]")
        this.userRole = page.locator("(//div[@class='oxd-select-text-input'])[1]")
        this.status = page.locator("(//div[@class='oxd-select-text-input'])[2]")

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