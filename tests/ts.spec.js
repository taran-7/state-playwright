// @ts-check
const { test, expect } = require('@playwright/test');

test('Check Login Form of Hotel', async ({ page }) => {

    await page.goto('https://tsimagine.com/')
    await page.waitForURL('https://tsimagine.com/')
    await page.locator('[id="menu-item-10915"]').click()
    await page.waitForURL('https://tsimagine.com/about/careers/')
    await page.locator('[class="fa fa-lg fa-linkedin-square"]').click()




})