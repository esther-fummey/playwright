import {test, expect} from '@playwright/test';

test('should handle checkbox change', async ({page}) => {

    await page.goto('https://www.salesforce.com/form/developer-signup/?=pb');

    await page.pause()

    await page.getByRole('combobox').selectOption('Ghana');

    await page.getByLabel('Country/Region').selectOption('Angola');
    await page.locator('//select[@name="CompanyCountry"]').selectOption('Algeria');
    await page.locator('//select[@name="CompanyCountry"]').selectOption({index: 4});
    await page.locator('//select[@name="CompanyCountry"]').selectOption({value: 'BH'});
    
    await page.close();

    })

