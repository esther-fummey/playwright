import { test } from "@playwright/test";

test('interact with elements in saucedemo', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');  //opens the website
    await page.pause();
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
});


/* 
from promise : awa *



*/