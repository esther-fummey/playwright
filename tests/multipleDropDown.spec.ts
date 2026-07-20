import {test, expect} from '@playwright/test';

test('should handle checkbox change', async ({page}) => {

    await page.goto('https://testpages.herokuapp.com/styled/basic-html-form-test.html');

    await page.pause()
    
    await page.getByRole('listbox').selectOption(['Selection Item 1', 'Selection Item 2']);

    await page.close()


    })

