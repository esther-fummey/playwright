import { test } from "@playwright/test";

test('Locate using CSS', async ({ page }) => {

    await page.goto('https://www.makemytrip.com/');  //opens the website
    // await page.locator('css=button:visible').first().click()
    await page.locator('css=button:visible').locator('font:text-is("flight tracker")').click();
    
});
