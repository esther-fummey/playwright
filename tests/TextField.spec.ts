import { test, expect } from "@playwright/test";

test('Handle text fields in saucedemo', async ({ page }) => {

    // Open website
    await page.goto('https://www.saucedemo.com');
    await page.pause();

    // =========================
    // USERNAME FIELD
    // =========================
    const username = page.locator('#user-name');

    await expect(username).toBeVisible();
    await expect(username).toBeEnabled();

    await username.fill('standard_user');
    await expect(username).toHaveValue('standard_user');

    await username.clear();
    await expect(username).toHaveValue('');

    // Using getByRole (same field, different locator strategy)
    const usernameRole = page.getByRole('textbox', { name: 'Username' });

    await expect(usernameRole).toBeVisible();
    await expect(usernameRole).toBeEnabled();

    await usernameRole.fill('locked_out_user');
    await expect(usernameRole).toHaveValue('locked_out_user');

    await usernameRole.clear();
    await expect(usernameRole).toHaveValue('');

    // =========================
    // PASSWORD FIELD
    // =========================
    const password = page.locator('#password');

    await expect(password).toBeVisible();
    await expect(password).toBeEnabled();

    await password.fill('secret_sauce');
    await expect(password).toHaveValue('secret_sauce');

    await password.clear();
    await expect(password).toHaveValue('');

    // Using placeholder locator
    const passwordPlaceholder = page.getByPlaceholder('Password');

    await expect(passwordPlaceholder).toBeVisible();
    await expect(passwordPlaceholder).toBeEnabled();

    await passwordPlaceholder.fill('123456');
    await expect(passwordPlaceholder).toHaveValue('123456');

    await passwordPlaceholder.clear();
    await expect(passwordPlaceholder).toHaveValue('');

    // =========================
    // LOGIN FLOW
    // =========================
    await username.fill('standard_user');
    await password.fill('secret_sauce');

    const loginBtn = page.locator('#login-button');

    await expect(loginBtn).toBeVisible();
    await expect(loginBtn).toBeEnabled();

    await loginBtn.click();

    // Assert successful login
    await expect(page).toHaveURL(/inventory/);

    await page.close();
});