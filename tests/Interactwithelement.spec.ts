import { test } from "@playwright/test";

test('interact with elements in saucedemo', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');  //opens the website
    //identify using id
    page.locator('#user-name').fill('standard_user');

    //identify using class name
    page.locator('.input_error[type="password"]').fill('secret_sauce');

    //identify using placeholder text
    page.locator('[placeholder="Username"]').fill('standard_user');

    //indentify using multiple attributes
    page.locator('input[type="text"][data-test="username"]').fill('standard_user');

    //identify using text
    page.locator('text="Username"').fill('standard_user');


    page.locator('#login-button').click();

});


/* 
from promise : awa *



*/