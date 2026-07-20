import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    console.log("This is before each hook")

});

test.afterEach(async ({ page }) => {
    console.log("This is after each hook")

});

test('login to saucedemo with valid credentials', async ({ page }) => {

    console.log("Login to saucedemo with valid creds")

});
test('login to saucedemo with invalid credentials', async ({ page }) => {

    console.log("Login to saucedemo with invalid creds")

});
