// @ts-check
const { test, expect } = require('@playwright/test');

test('Check Login Form of Hotel', async ({ page }) => {

    await page.goto('https://www.hotelconnect.me/')
    await page.waitForURL('https://www.hotelconnect.me/')

    // go to https://www.hotelconnect.me/connections

    await page.locator('#comp-kcvsox461label').click()
    await page.waitForURL('https://www.hotelconnect.me/connections')


    // open _blank page

    const [popup] = await Promise.all([
        // It is important to call waitForEvent before click to set up waiting.
        page.waitForEvent('popup'),
        // Opens popup.
        page.locator('#comp-kcn6oi9p').click(),
    ]);
    await popup.waitForLoadState();
    await page.locator('#input_comp-kj8pz8o9').fill('olex@taraniuk.com')
    await page.locator('#input_comp-kj8pz8o9').filter({ hasText: 'olex@taraniuk.com' })

    // // find text "Get in Touch!"

    // await page.locator('span[style="letter-spacing:normal;"]:has-text("Get in Touch!")').isVisible()

    // // scroll to 'Get in Touch!'

    // await page.locator('#input_comp-kj8ppv5h1').scrollIntoViewIfNeeded()
    // await page.locator('#input_comp-kj8ppv5h1').fill('Olex')
    // await page.locator('#input_comp-kj8ppv5h1').filter({ hasText: 'Olex' })



    // // check status code
    // await page.route('**/remote-login', route => {
    //     route.fulfill({
    //         status: 401,
    //         contentType: 'application/json',
    //         body: 'Not Found!'
    //     });
    // });




});