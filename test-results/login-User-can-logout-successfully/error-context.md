# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> User can logout successfully
- Location: src\tests\login.spec.js:19:1

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByPlaceholder('Username')

```

# Test source

```ts
  1  | class LoginPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.usernameInput = page.getByPlaceholder('Username');
  5  |     this.passwordInput = page.getByPlaceholder('Password');
  6  |     this.loginButton = page.getByRole('button', { type: 'submit' });
  7  |     this.loggedInUser = page.locator('//p[@class="oxd-userdropdown-name"]');
  8  |     this.logoutDropdown = page.locator('//ul[@role="menu"]');
  9  |     this.logoutMenuItem=page.locator('//a[text()="Logout"]');
  10 |     this.logoutDdMenus = page.locator('//ul/li/a[@role="menuitem"]');
  11 |   }
  12 | 
  13 |   async goto() {
  14 |     await this.page.goto('/web/index.php/auth/login');
  15 |   }
  16 | 
  17 |   async login(username, password) {
> 18 |     await this.usernameInput.fill(username);
     |                              ^ Error: locator.fill: Target page, context or browser has been closed
  19 |     await this.passwordInput.fill(password);
  20 |     await this.loginButton.click();
  21 |   }
  22 | 
  23 |   async logout() {
  24 |     await this.logoutMenuItem.click();
  25 |   }
  26 | 
  27 |   async logout_different_feature(){
  28 | 
  29 |   /*const options= await this.logoutDdMenus.allTextContents();
  30 | 
  31 |    console.log(options);*/
  32 | 
  33 |     const handles = await this.logoutDdMenus.elementHandles();
  34 |     
  35 |     for(let handle of handles)
  36 |     {
  37 |       const value = await handle.textContent();
  38 |       //console.log(value);
  39 |       if(value.includes('Logout'))
  40 |       {
  41 |         await handle.click();
  42 |         console.log(`${value} clicked successfully`);
  43 |       }
  44 |        
  45 |     }
  46 |   }
  47 | }
  48 | 
  49 | module.exports = { LoginPage };
  50 | 
```