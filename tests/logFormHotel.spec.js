// @ts-check
const { test, expect } = require('@playwright/test');

test('Check Login Form of Hotel', async ({ page }) => {

    await page.goto('https://hotelconnect.cloud/')
    await page.waitForURL('https://hotelconnect.cloud/')

    // Account Name
    const accountName = page.locator('#login-form-login')
    await accountName.fill('taran-_7O12323948')
    await accountName.filter({ hasText: 'taran-_7O12323948' })

    // Agent Name
    const agentName = page.locator('#login-form-agentName')
    await agentName.fill('Wholesaler of Accommodation')
    await agentName.filter({ hasText: 'Wholesaler of Accommodation' })

    // Password field
    const passField = page.locator('#login-form-password')
    await passField.fill('Wholesaler')
    await passField.filter({ hasText: 'Wholesaler' })

    // button Login
    await page.locator('button[data-theme="primary"]', { hasText: 'Login' }).click()

    // check status code
    await page.route('**/remote-login', route => {
        route.fulfill({
            status: 401,
            contentType: 'application/json',
            body: 'Not Found!'
        });
    });

    // Assertions 
    await page.locator('.system-notifications__text', { hasText: 'Argument 1 passed to' })



});