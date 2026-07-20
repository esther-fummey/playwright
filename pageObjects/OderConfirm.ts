import { Page, Locator} from "@playwright/test";
export class OrderConfirm{
    readonly page: Page;
    //readonly finishButton: Locator;
    readonly backToHomeButton: Locator;
    readonly orderConfirmationMessage: Locator;


    constructor(page: Page) {
        this.page = page;
        this.backToHomeButton = page.locator('#back-to-products');
        this.orderConfirmationMessage = page.locator('.complete-header');
    }

    async navigateToHome(){
        await
        await this.backToHomeButton.click();
        await this.page.waitForTimeout(2000); // Wait for 2 seconds before closing the application
    }
    
}