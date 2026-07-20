import {test, expect} from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import { PagaManager } from '../pageObjects/PageManager';










// test('E2E', async ({page}) =>{
//  const loginPageInstance = new LoginPage(page);
//  const homePageInstance = new HomePage(page);
//  const cartPageInstance = new CartPage(page);
//  const yourInforInstance = new YourInfor(page);
//  const overviewPageInstance = new Overview(page);
//  const orderConfirmInstance = new OrderConfirm(page);


//  //Login to the application
//  loginPageInstance.openSauceDemoApp();
//  await page.waitForTimeout(3000)
//  loginPageInstance.loginToSauceDemoApp('standard_user', 'secret_sauce');
//  await page.waitForTimeout(3000)
//  //await loginPageInstance.openSauceDemoApp();
//  //await loginPageInstance.closeTheApplication();
 
// //Add product to the cart
//  await homePageInstance.addProductToCart();
 
 
//  //click on checkout button
//  await cartPageInstance.clickOnCheckoutButton();



//  //enter details
//  await yourInforInstance.enterYourInformation('Bonit', 'Kumar', '12345');
//  await page.waitForTimeout(3000)

//  //place the order
//  await overviewPageInstance.placeTheOrder();


//  //confirm the order
//  await orderConfirmInstance.navigateToHome();

//  //logout from the application
// await homePageInstance.logoutFromApplication();
//  loginPageInstance.closeTheApplication();

// })


test('E2E 2', async ({page}) =>{

    const pageManagerInstance = new PagaManager(page);
    pageManagerInstance.instanceToLogin().openSauceDemoApp();
    pageManagerInstance.instanceToLogin().closeTheApplication();


  
//  const loginPageInstance = new LoginPage(page);
//  const homePageInstance = new HomePage(page);
//  const cartPageInstance = new CartPage(page);
//  const yourInforInstance = new YourInfor(page);
//  const overviewPageInstance = new Overview(page);
//  const orderConfirmInstance = new OrderConfirm(page);


 //Login to the application
//  loginPageInstance.openSauceDemoApp();
//  await page.waitForTimeout(3000)
//  loginPageInstance.loginToSauceDemoApp('standard_user', 'secret_sauce');
//  await page.waitForTimeout(3000)
 //await loginPageInstance.openSauceDemoApp();
 //await loginPageInstance.closeTheApplication();
 
//Add product to the cart
//  await homePageInstance.addProductToCart();
 
 
 //click on checkout button
//  await cartPageInstance.clickOnCheckoutButton();



 //enter details
//  await yourInforInstance.enterYourInformation('Bonit', 'Kumar', '12345');
//  await page.waitForTimeout(3000)

 //place the order
//  await overviewPageInstance.placeTheOrder();


 //confirm the order
//  await orderConfirmInstance.navigateToHome();

 //logout from the application
// await homePageInstance.logoutFromApplication();
//  loginPageInstance.closeTheApplication();

})
