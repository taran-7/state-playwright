// @ts-check
const { test, expect } = require('@playwright/test');

test('Check Login Form of Hotel', async ({ page }) => {

    await page.goto('https://www.hotelconnect.me/')
    await page.waitForURL('https://www.hotelconnect.me/')

    // // find and fill "Get in Touch!"
    const nameField = page.locator('#input_comp-kj8ph62d2')
    await nameField.fill('Olex Taraniuk')
    await nameField.filter({ hasText: 'Olex Taraniuk' })
    // // find and fill Email
    const nameEmail = page.locator('#input_comp-kj8ph62g1')
    await nameEmail.fill('gatese@mailbox.in.ua3')
    await nameEmail.filter({ hasText: 'gatese@mailbox.in.ua' })
    // // find and fill Subject
    const nameSubject = page.locator('#input_comp-kj8ph62i2')
    await nameSubject.fill('Test booking by Playwright')
    await nameSubject.filter({ hasText: 'Test booking by Playwright' })
    // // find and fill message field
    const nameDescript = page.locator('#textarea_comp-kj8ph62k2')
    await nameDescript.fill('Testing of the form. Tester Oleksandr Taranyuk. Test booking by Playwright. Marieke Steenman Reservation Manager Zoo Hotel - Amsterdam I love that HotelConnect is an all-in-one solution so there no need to get one company to handle the booking engine, one for the channel manager, one for PMS. HotelConnect has it. Very friendly and easy hotel software for beginners to professionals. Its accessibility and variety of modules make it suitable for each department in the hotel to operate in an automatic working environment. The look is simple, but it can do everything. Drag and drop reservations from room to room. Edit pricing in seconds. Need client info for a checkout? It\'s in front of your eyes in seconds.')
    await nameDescript.filter({ hasText: 'Testing of the form. Tester Oleksandr Taranyuk. Test booking by Playwright. Marieke Steenman Reservation Manager Zoo Hotel - Amsterdam I love that HotelConnect is an all-in-one solution so there no need to get one company to handle the booking engine, one for the channel manager, one for PMS. HotelConnect has it. Very friendly and easy hotel software for beginners to professionals. Its accessibility and variety of modules make it suitable for each department in the hotel to operate in an automatic working environment. The look is simple, but it can do everything. Drag and drop reservations from room to room. Edit pricing in seconds. Need client info for a checkout? It\'s in front of your eyes in seconds.' })

    // submit 

    await page.locator('[data-testid="buttonElement"]').click()

    // check status

    // check status code
    await page.route('**/_api/wix-forms/v1/submit-form', route => {
        route.fulfill({
            status: 200,
            contentType: 'application/json',
        });
    });




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