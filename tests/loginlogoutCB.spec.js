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


    const emailField = page.locator('input[placeholder="email"]')
    // @ts-ignore
    // await emailField.fill(process.env.USERNAME);

    const passwordField = page.locator('input[placeholder="Password"]')
    // @ts-ignore
    // await passwordField.fill(process.env.PASSWORD);

    const buttonLogin = page.locator('[class="sc-fzoXzr geQSF g-mb-15 g-w-100"]:text("Login")')
    await buttonLogin.click()

    // checking login with empty email fiel
    // @ts-ignore
    await passwordField.fill(process.env.PASSWORD);
    await buttonLogin.click()
    await page.locator('b:text("text=error! >> nth=0")').isVisible()

    // checking login with empty password fiel



    // checking login with empty both fiels







    // // @ts-ignore
    // await page.waitForURL(process.env.BASE_URL)
    // await page.locator('h1', { hasText: 'Dashboard' })

    // // chech Dshboard
    // // const resourceBlockOnDashbord = page.locator('.resource-block-note').first()
    // const resourceBlockOnDashbord = page.locator('.resource-block-note').nth(0)
    // await expect(resourceBlockOnDashbord).toBeVisible({ timeout: 20000 })

    // // chech Manage My Organization
    // await page.locator('#my-organization').click()
    // const buttonCreateUser = page.locator('[data-cy="my-org-add-user"]')
    // await buttonCreateUser.waitFor({
    //     state: "visible"
    // })


});
