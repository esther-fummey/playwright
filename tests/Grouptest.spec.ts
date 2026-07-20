import { test } from "@playwright/test";

// =====================================================================
// PLAYWRIGHT GROUPS (test.describe)
// =====================================================================
// Why use test.describe()?
// 1. Organization: It lets you group related tests together under a single block.
// 2. Shared Setup/Teardown: You can use hooks like `test.beforeEach()` inside a group 
//    so they ONLY apply to the tests within this specific group.
// 3. Reporting: In your Playwright HTML report, these tests will be neatly 
//    nested under the "Saucedemo login test cases group" folder.
// 4. Running specific groups: You can run just this group using the command line:
//    npx playwright test -g "Saucedemo login test cases group"

test.describe('Saucedemo login test cases group', () => {

    // Test 1: Successful Login
    test('interact with elements in saucedemo', async ({ page }) => {
        await page.goto('https://www.saucedemo.com');  // opens the website
        
        // await page.pause(); // Opens the Playwright Inspector for step-by-step debugging

        // Fill out valid credentials
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();
    });

    // Test 2: Invalid Login
    test('login with invalid credentials', async ({ page }) => {
        await page.goto('https://www.saucedemo.com');  // opens the website
        
        // Fill out intentionally wrong credentials
        await page.locator('#user-name').fill('standarduser');
        await page.locator('#password').fill('secret_saucedd');
        await page.locator('#login-button').click();
    });
    
});