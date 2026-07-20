import { test } from "@playwright/test";

// test('double click operation', async ({ page }) => {

//     await page.goto('https://www.saucedemo.com');  //opens the website
//     await page.pause();
//     // await page.locator('#user-name').fill('standard_user');
//     // await page.locator('#password').fill('secret_sauce');
//     // await page.locator('#login-button').click();

//     //await page.locator('#login-button').dblclick()
//     await page.locator('#login-button').click({button: 'right'})

//     await page.close()
// });
test('hover over', async ({ page }) => {

    await page.goto('https://www.emirates.com/in/english/book/?utm_source=')
    await page.pause();
    // await page.locator('#user-name').fill('standard_user');
    // await page.locator('#password').fill('secret_sauce');
    // await page.locator('#login-button').click();

    //await page.locator('#login-button').dblclick()
    // await page.locator('#login-button').click({button: 'right'})
    // await page.locator('(//*[text()="About booking online"])[1]').hover()
   // we also have force   await page.locator('#login-button').click({button: 'right'})
    await page.close()
});


/* 
from promise : awa *



*/