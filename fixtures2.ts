import {test as base} from "@playwright/test";

// Define a new test that extends the base test
type hooksFixture = {
    loignLogoutSetup: any;
}

export const test = base.extend<hooksFixture>({ 
    loignLogoutSetup: async ({page}, use) => {
        // You can perform any setup here if needed
        const loginLogoutSetup =  undefined;
      //login
        await page.locator('#user-name').fill(process.env.username || 'standard_user');
    await page.locator('#password').fill(process.env.password || 'secret_sauce');
    await page.locator('#login-button').click();
        
       await use(loginLogoutSetup);
       //logout
       await page.locator('#react-burger-menu-btn').click();
       await page.locator('#logout_sidebar_link').click();
        
    }
})
// const test = base.extend({
//   // You can add fixtures here if needed
// });