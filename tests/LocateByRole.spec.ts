import { test } from "@playwright/test";

test('interact with elements in saucedemo', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');  //opens the website
    
    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    //await page.close()
});


