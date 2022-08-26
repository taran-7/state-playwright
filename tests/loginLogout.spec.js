// @ts-check
const { test, expect } = require('@playwright/test');
import dotenv from "dotenv";

dotenv.config({
    path: `.envvdctest`,
    override: true
})

test('Login,  Log out', async ({ page }) => {
    // @ts-ignore
    await page.goto(process.env.BASE_URL);
    await page.waitForURL(`${process.env.BASE_URL}/login`)
    // @ts-ignore
    await page.locator('[data-cy="email-input"]').fill(process.env.USERNAME);
    // @ts-ignore
    await page.locator('[data-cy="password-input"]').fill(process.env.PASSWORD);
    const buttonLogin = page.locator('[data-cy="login-button"]')
    await buttonLogin.click()
    // @ts-ignore
    await page.waitForURL(process.env.BASE_URL)
    await page.locator('h1', { hasText: 'Dashboard' })


    await page.locator('[data-cy="header-account-button"]').click()
    await page.locator('[data-cy="header-logout-button"]').click()
    await page.waitForURL(`${process.env.BASE_URL}/login`)
    const loginForm = page.locator('[data-cy="login-button"]')
    await expect(loginForm).toHaveText('Log in');
});
