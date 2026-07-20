import { test } from "@playwright/test";

test('Ese', async ({ page }) => {

    await page.goto('/');  //opens the website
    await page.pause();
    await page.locator('#user-name').fill(process.env.username || 'standard_user');
    await page.locator('#password').fill(process.env.password || 'secret_sauce');
    await page.locator('#login-button').click();

    // add to cart
    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    //click on cart logo
    await page.locator('#shopping_cart_container').click();

    //click on checkout
    await page.locator('#checkout').click();

    //fill the form
    await page.locator('#first-name').fill('John');
    await page.locator('#last-name').fill('Doe');
    await page.locator('#postal-code').fill('12345');

    //click on continue
    await page.locator('#continue').click();

    //click on finish
    await page.locator('#finish').click();

    //validate the order confirmation
    const confirmationMessage = await page.locator('.complete-header').textContent();
    console.log('Order Confirmation Message:', confirmationMessage);    
    await page.locator('#back-to-products').click();

    //logout
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
    
});


/* 
from promise : awa *



*/