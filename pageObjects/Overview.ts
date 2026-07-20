import { Page, Locator} from "@playwright/test";
export class Overview{
    readonly page: Page;
    readonly finishButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.finishButton = page.locator('#finish');
    }

    async placeTheOrder(){
        await this.finishButton.click();
        await this.page.waitForTimeout(2000); // Wait for 2 seconds before closing the application
    }
    
}