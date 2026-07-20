import { Page, Locator} from "@playwright/test";
export class LoginPage{
    // Define selectors using getter methods
    readonly page: Page;
    readonly usernameTextField: Locator;
    readonly passwordTextField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameTextField = page.locator('#user-name');
        this.passwordTextField = page.locator('#password');
        this.loginButton = page.locator('#login-button');

    }
    async openSauceDemoApp(){
        await this.page.goto('https://www.saucedemo.com');
    }
    async loginToSauceDemoApp(username: string, password: string){
        await this.usernameTextField.fill(username);
        await this.passwordTextField.fill(password);
        await this.page.waitForTimeout(2000); // Wait for 2 seconds before clicking the login button
        await this.loginButton.click();
    }
    async closeTheApplication(){
        await this.page.close();
    }


}