import {test, expect} from '@playwright/test';

// test('should handle checkbox change', async ({page}) => {

//     await page.goto('https://www.bing.com/account/general?ru=');

//     await page.pause()

//     // await page.getByLabel('See search suggestions as you type').check();
//     await page.getByLabel('See search suggestions as you type').uncheck();


//     await page.close()
// })
test('should handle checkbox change', async ({page}) => {

    await page.goto('https://www.bing.com/account/general?ru=');

    await page.pause()

    // await page.getByLabel('See search suggestions as you type').check();
    const checkboxs = await page.getByRole('checkbox');
    
    for(const checkbox of await checkboxs.all()) {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();

    await page.close()
}})

