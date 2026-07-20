import { test, chromium } from "@playwright/test";

test('handle page without fixture', async ({ }) => {
    const browser = await chromium.launch()
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.amazon.com');  //opens the website

    
    await page.close()
    await context.close()
    await browser.close()
});


/* 
from promise : awa *



*/