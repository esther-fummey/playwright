import { test } from "@playwright/test";

test('open saucedemo', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');  //opens the website
    page.locator('#user-name').fill('standard_user');
    page.locator('#password').fill('secret_sauce');
    page.locator('#login-button').click();

});


/* 
from promise : awa *



*/