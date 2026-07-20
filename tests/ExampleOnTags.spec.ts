import { test } from "@playwright/test";

// =====================================================================
// PLAYWRIGHT TAGS EXAMPLES
// =====================================================================
// Tags allow you to label tests so you can run specific groups from the command line.
// You can use the { tag: '@yourTag' } option to add one or multiple tags.

// Example 1: Single Tag
// Run this test with: npx playwright test --grep "@story1"
test('Login with valid credentials', {tag: '@story1'}, async ({ page }) => {
    await page.goto('https://www.saucedemo.com');  // opens the website
    // await page.pause(); // Pauses execution to open the Playwright Inspector
    
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
});

// Example 2: Multiple Tags (Array of tags)
// Run this test with: npx playwright test --grep "@reg" OR npx playwright test --grep "@story1"
test('Login with Invalid username', {tag:['@story1','@reg']}, async ({ page }) => {
    await page.goto('https://www.saucedemo.com');  // opens the website
    // await page.pause();
    
    await page.locator('#user-name').fill('standard_user'); // Fills username
    await page.locator('#password').fill('secret_sauce'); // Fills password
    await page.locator('#login-button').click(); // Clicks login button
});

// Example 3: Another Multiple Tags example
// Run this test with: npx playwright test --grep "@sm"
test('Login with invalid password', {tag:['@story1','@sm']}, async ({ page }) => {
    await page.goto('https://www.saucedemo.com');  // opens the website
    // await page.pause();
    
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
});

// =====================================================================
// TAGGING AN ENTIRE GROUP OF TESTS
// =====================================================================
// You can tag an entire 'test.describe' block. 
// Every test inside this block will automatically inherit the '@reg' tag.
// NOTE: I changed your typo from '@rag' to '@reg' so your terminal command works!
test.describe('group of tests', {tag: '@reg'}, () => {

    test('login test 1 inside group', async ({ page }) => {
        await page.goto('https://www.saucedemo.com');  // opens the website
    });

    test('login test 2 inside group', async ({ page }) => {
        await page.goto('https://www.saucedemo.com');  // opens the website
    });

});

/* 
Notes:
- You ran `npx playwright test --grep '@reg'` and it said "No tests found".
  That was because the tests at the top were commented out, and the describe block at the bottom had a typo ('@rag' instead of '@reg').
  Now that they are active and the typo is fixed, that exact terminal command will work perfectly!
*/