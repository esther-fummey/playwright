import { test } from "@playwright/test";



test.describe('Saucedemo login test cases group', () => {
     test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com')

});

test.afterEach(async ({ page }) => {
    await page.pause()

});

    // Test 1: Successful Login
    test('interact with elements in saucedemo', async ({ page }) => {

        
        // await page.pause(); // Opens the Playwright Inspector for step-by-step debugging

        // Fill out valid credentials
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();
    });

    // Test 2: Invalid Login
    test('login with invalid credentials', async ({ page }) => {
        
        
        // Fill out intentionally wrong credentials
        await page.locator('#user-name').fill('standarduser');
        await page.locator('#password').fill('secret_saucedd');
        await page.locator('#login-button').click();
    });
    
});