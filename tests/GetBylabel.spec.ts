import { test } from "@playwright/test";

test('Locate uisng label', async ({ page }) => {

    await page.goto('https://www.salesforce.com/uk/form/signup/sales-ee/');  //opens the website
    
    await page.getByLabel('First name').fill('surendra');
    
    //await page.close()
});

test('Locate using  placeholder', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');  //opens the website
    
    await page.getByPlaceholder('Username').fill('surendra');
    
    
});


