# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> User can logout successfully
- Location: src\tests\login.spec.js:18:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//ul[@role="menu"]').locator('li a').getByRole('link', { name: 'Logout' })

```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic:
    - complementary [ref=f1e4]:
      - navigation "Sidepanel" [ref=f1e5]:
        - generic [ref=f1e6]:
          - link [ref=f1e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f1e9]
          - text: 
        - generic [ref=f1e10]:
          - generic [ref=f1e11]:
            - generic [ref=f1e12]:
              - textbox "Search" [ref=f1e15]
              - button "" [ref=f1e16] [cursor=pointer]
            - separator [ref=f1e18]
          - list [ref=f1e19]:
            - listitem [ref=f1e20]:
              - link "Admin" [ref=f1e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f1e25]:
              - link "PIM" [ref=f1e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f1e41]:
              - link "Leave" [ref=f1e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f1e46]:
              - link "Time" [ref=f1e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f1e54]:
              - link "Recruitment" [ref=f1e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f1e62]:
              - link "My Info" [ref=f1e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f1e70]:
              - link "Performance" [ref=f1e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f1e80]:
              - link "Dashboard" [ref=f1e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f1e85]:
              - link "Directory" [ref=f1e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f1e90]:
              - link "Maintenance" [ref=f1e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f1e96]:
              - link "Claim" [ref=f1e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f1e105]:
              - link "Buzz" [ref=f1e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f1e110]:
      - generic [ref=f1e111]:
        - generic [ref=f1e112]:
          - text: 
          - heading "Dashboard" [level=6] [ref=f1e114]
        - link [ref=f1e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f1e117] [cursor=pointer]
        - list [ref=f1e123]:
          - listitem [ref=f1e124]:
            - generic [ref=f1e125] [cursor=pointer]:
              - img "profile picture" [ref=f1e126]
              - paragraph [ref=f1e127]: firstNameTest lastNameTest
              - generic [ref=f1e128]: 
            - menu [ref=f1e129]:
              - listitem [ref=f1e130]:
                - menuitem "About" [ref=f1e131] [cursor=pointer]
              - listitem [ref=f1e132]:
                - menuitem "Support" [ref=f1e133] [cursor=pointer]
              - listitem [ref=f1e134]:
                - menuitem "Change Password" [ref=f1e135] [cursor=pointer]
              - listitem [ref=f1e136]:
                - menuitem "Logout" [ref=f1e137] [cursor=pointer]
      - navigation "Topbar Menu" [ref=f1e139]:
        - list [ref=f1e140]:
          - button "" [ref=f1e142] [cursor=pointer]
  - generic [ref=f1e144]:
    - generic [ref=f1e146]:
      - generic [ref=f1e148]:
        - generic [ref=f1e150]:
          - generic [ref=f1e151]: 
          - paragraph [ref=f1e152]: Time at Work
        - separator [ref=f1e153]
        - generic [ref=f1e155]:
          - generic [ref=f1e156]:
            - img "profile picture" [ref=f1e158]
            - generic [ref=f1e159]:
              - paragraph [ref=f1e160]: Punched Out
              - paragraph [ref=f1e161]: "Punched Out: Mar 29th at 01:19 PM (GMT 7)"
          - generic [ref=f1e162]:
            - generic [ref=f1e163]: 0h 0m Today
            - button "" [ref=f1e164] [cursor=pointer]
          - separator [ref=f1e166]
          - generic [ref=f1e167]:
            - generic [ref=f1e168]:
              - paragraph [ref=f1e169]: This Week
              - paragraph [ref=f1e170]: Aug 24 - Aug 30
            - generic [ref=f1e171]:
              - generic [ref=f1e172]: 
              - paragraph [ref=f1e173]: 0h 0m
      - generic [ref=f1e177]:
        - generic [ref=f1e179]:
          - generic [ref=f1e180]: 
          - paragraph [ref=f1e181]: My Actions
        - separator [ref=f1e182]
        - generic [ref=f1e184]:
          - generic [ref=f1e185]:
            - button [ref=f1e186] [cursor=pointer]
            - paragraph [ref=f1e192] [cursor=pointer]: (1) Pending Self Review
          - generic [ref=f1e193]:
            - button [ref=f1e194] [cursor=pointer]
            - paragraph [ref=f1e203] [cursor=pointer]: (1) Candidate to Interview
      - generic [ref=f1e205]:
        - generic [ref=f1e207]:
          - generic [ref=f1e208]: 
          - paragraph [ref=f1e209]: Quick Launch
        - separator [ref=f1e210]
        - generic [ref=f1e212]:
          - generic [ref=f1e213]:
            - button "Assign Leave" [ref=f1e214] [cursor=pointer]
            - generic "Assign Leave" [ref=f1e217]:
              - paragraph [ref=f1e218]: Assign Leave
          - generic [ref=f1e219]:
            - button "Leave List" [ref=f1e220] [cursor=pointer]
            - generic "Leave List" [ref=f1e227]:
              - paragraph [ref=f1e228]: Leave List
          - generic [ref=f1e229]:
            - button "Timesheets" [ref=f1e230] [cursor=pointer]
            - generic "Timesheets" [ref=f1e236]:
              - paragraph [ref=f1e237]: Timesheets
          - generic [ref=f1e238]:
            - button "Apply Leave" [ref=f1e239] [cursor=pointer]
            - generic "Apply Leave" [ref=f1e242]:
              - paragraph [ref=f1e243]: Apply Leave
          - generic [ref=f1e244]:
            - button "My Leave" [ref=f1e245] [cursor=pointer]
            - generic "My Leave" [ref=f1e250]:
              - paragraph [ref=f1e251]: My Leave
          - generic [ref=f1e252]:
            - button "My Timesheet" [ref=f1e253] [cursor=pointer]
            - generic "My Timesheet" [ref=f1e256]:
              - paragraph [ref=f1e257]: My Timesheet
      - generic [ref=f1e259]:
        - generic [ref=f1e261]:
          - generic [ref=f1e262]: 
          - paragraph [ref=f1e263]: Buzz Latest Posts
        - separator [ref=f1e264]
        - generic [ref=f1e266]:
          - generic [ref=f1e267]:
            - generic [ref=f1e268] [cursor=pointer]:
              - img "profile picture" [ref=f1e270]
              - generic [ref=f1e271]:
                - paragraph [ref=f1e272]: firstNameTest middleNameTest lastNameTest
                - paragraph [ref=f1e273]: 2020-07-10 11:38 PM
            - separator [ref=f1e274]
            - paragraph [ref=f1e275]: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
          - generic [ref=f1e276]:
            - generic [ref=f1e277] [cursor=pointer]:
              - img "profile picture" [ref=f1e279]
              - generic [ref=f1e280]:
                - paragraph [ref=f1e281]: Sania Shaheen
                - paragraph [ref=f1e282]: 2020-07-10 11:38 PM
            - separator [ref=f1e283]
            - paragraph [ref=f1e284]: "World Championship: What makes the perfect snooker player? Mark Selby: Robertson has one of the best techniques in the game. It is very, very straight and he fully commits to every single shot he plays. John Higgins: Every shot is repetitive. He always keeps the same technique and cues through the ball bang straight. Barry Hawkins: Robertson is textbook with his grip and has a ramrod solid cue action, delivering it in a straight line. Honourable mentions: Shaun Murphy, Ding Junhui, Jack Lisowski."
          - generic [ref=f1e285]:
            - generic [ref=f1e286] [cursor=pointer]:
              - img "profile picture" [ref=f1e288]
              - generic [ref=f1e289]:
                - paragraph [ref=f1e290]: Rebecca Harmony
                - paragraph [ref=f1e291]: 2020-07-10 11:34 PM
            - separator [ref=f1e292]
            - paragraph [ref=f1e293]: Throwback Thursdays!!
          - generic [ref=f1e295]:
            - generic [ref=f1e296] [cursor=pointer]:
              - img "profile picture" [ref=f1e298]
              - generic [ref=f1e299]:
                - paragraph [ref=f1e300]: Russel Hamilton
                - paragraph [ref=f1e301]: 2020-07-10 11:33 PM
            - separator [ref=f1e302]
            - paragraph [ref=f1e303]: Live SIMPLY Dream BIG Be GREATFULL Give LOVE Laugh LOT.......
      - generic [ref=f1e305]:
        - generic [ref=f1e306]:
          - paragraph [ref=f1e311]: Employees on Leave Today
          - generic [ref=f1e312] [cursor=pointer]: 
        - separator [ref=f1e313]
        - generic [ref=f1e315]:
          - img "No Content" [ref=f1e316]
          - paragraph [ref=f1e317]: No Employees are on Leave Today
      - generic [ref=f1e319]:
        - generic [ref=f1e321]:
          - generic [ref=f1e322]: 
          - paragraph [ref=f1e323]: Employee Distribution by Sub Unit
        - separator [ref=f1e324]
        - list [ref=f1e329]:
          - listitem [ref=f1e330] [cursor=pointer]:
            - generic "Engineering" [ref=f1e332]
          - listitem [ref=f1e333] [cursor=pointer]:
            - generic "Human Resources" [ref=f1e335]
          - listitem [ref=f1e336] [cursor=pointer]:
            - generic "Administration" [ref=f1e338]
          - listitem [ref=f1e339] [cursor=pointer]:
            - generic "Client Services" [ref=f1e341]
          - listitem [ref=f1e342] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e344]
      - generic [ref=f1e346]:
        - generic [ref=f1e348]:
          - generic [ref=f1e349]: 
          - paragraph [ref=f1e350]: Employee Distribution by Location
        - separator [ref=f1e351]
        - list [ref=f1e356]:
          - listitem [ref=f1e357] [cursor=pointer]:
            - generic "Texas R&D" [ref=f1e359]
          - listitem [ref=f1e360] [cursor=pointer]:
            - generic "New York Sales Office" [ref=f1e362]
          - listitem [ref=f1e363] [cursor=pointer]:
            - generic "Unassigned" [ref=f1e365]
    - generic [ref=f1e366]:
      - paragraph [ref=f1e367]: OrangeHRM OS 5.9
      - paragraph [ref=f1e368]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f1e369] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
  9  |   }
  10 | 
  11 |   async goto() {
  12 |     await this.page.goto('/web/index.php/auth/login');
  13 |   }
  14 | 
  15 |   async login(username, password) {
  16 |     await this.usernameInput.fill(username);
  17 |     await this.passwordInput.fill(password);
  18 |     await this.loginButton.click();
  19 |   }
  20 | 
  21 |   async logout() {
> 22 |     await this.logoutDropdown.locator('li a').getByRole('link', { name: 'Logout' }).click();
     |                                                                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  23 |   }
  24 | }
  25 | 
  26 | module.exports = { LoginPage };
  27 | 
```