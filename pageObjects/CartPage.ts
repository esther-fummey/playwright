import { Page, Locator} from "@playwright/test";
export class CartPage{
    readonly page: Page;
    readonly checkoutButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator('#checkout');
    }

    async clickOnCheckoutButton(){
        await this.checkoutButton.click();
        await this.page.waitForTimeout(2000); // Wait for 2 seconds before closing the application
    }
    
}