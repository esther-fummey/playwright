import { Page, Locator} from "@playwright/test";
import { LoginPage } from "./LoginPage";
export class PagaManager{
    readonly page: Page;
    readonly loginPageInstance: LoginPage;


    constructor(page: Page) {
        this.page = page;
        this.loginPageInstance = new LoginPage(this.page);
        
    }

    instanceToLogin(){
        return this.loginPageInstance;
    }
    
}