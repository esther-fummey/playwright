import { test, expect } from "@playwright/test";

test('interact with elements in saucedemo', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');  //opens the website
    await page.pause();
    page.on('dialog', async dialog => {
        console.log(dialog.message());
        console.log(dialog.type());

        expect(dialog.message()).toBe('I am a JS confirm');
        expect(dialog.type()).toBe('prompt');
        //await dialog.accept();
        await dialog.accept('bonita');
        //
        //await dialog.dismiss();
    });

 await page.locator('//button[text()="Click for JS Confirm"]').click();
 await page.locator('#result').textContent();
 expect(await page.locator('#result').textContent()).toBe('You entered: surremdra');

 await page.close()
});


/* 
from promise : awa *



*/