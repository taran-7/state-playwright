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

    // chech Dshboard
    // const resourceBlockOnDashbord = page.locator('.resource-block-note').first()
    const resourceBlockOnDashbord = page.locator('.resource-block-note').nth(0)
    await expect(resourceBlockOnDashbord).toBeVisible({ timeout: 20000 })

    // chech Manage My Organization
    await page.locator('#my-organization').click()
    const buttonCreateUser = page.locator('[data-cy="my-org-add-user"]')
    await buttonCreateUser.waitFor({
        state: "visible"
    })
    // chech Manage All Organizations
    await page.locator('#all-organizations').click()
    const buttonCreateOrganisation = page.locator('[data-cy="create-undefined"]')
    await buttonCreateOrganisation.waitFor({
        state: "visible"
    })
    // chech All Devices
    await page.locator('#allDevices').click()
    const buttonCreateDevice = page.locator('[data-cy="devices-create-new-device-link"]')
    await buttonCreateDevice.waitFor({
        state: "visible"
    })
    // chech Disaster Recovery
    await page.locator('#disasterRecovery').click()
    const buttonCreateResPull = page.locator('[data-cy="create-undefined"]')
    await buttonCreateResPull.waitFor({
        state: "visible"
    })
    // chech Templates & ISOs
    // chech Networking
    // chech Kubernetes
    // chech Persistent Storage
    // chech Databases
    // chech Billing Details
    // chech Usage Overview
    // chech Operational Area
    // chech Sales Dashboard
    // chech Accounting


    // await page.locator('[data-cy="header-account-button"]').click()
    // await page.locator('[data-cy="header-logout-button"]').click()
    // await page.waitForURL('https://vdc-test.xelon.ch/login')
    // const loginForm = page.locator('[data-cy="login-button"]')
    // await expect(loginForm).toHaveText('Log in');
});
