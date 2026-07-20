import { test } from "@playwright/test";

test('Locate uisng its text content', async ({ page }) => {

    await page.goto('https://www.salesforce.com/uk/form/signup/sales-ee/');  //opens the website
    
    await page.getByText('Next').click();   
    
    //await page.close()
});



