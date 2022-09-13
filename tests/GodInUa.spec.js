// @ts-check
const { test, expect } = require('@playwright/test');

test('Test http://www.god.in.ua/ site', async ({ page }) => {

    await page.goto('http://www.god.in.ua/')
    await page.waitForURL('http://www.god.in.ua/')

    const buttonBible = page.locator('#menu-item-33')
    await buttonBible.click()

    await page.waitForURL('http://www.god.in.ua/?page_id=25')
    await expect(buttonBible).toBeVisible({ timeout: 20000 })
    const linkArt = page.locator('img[data-attachment-id^="1"]').nth(1)
    await expect(linkArt).toBeVisible()

})
