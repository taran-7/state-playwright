// @ts-check
const { test, expect } = require('@playwright/test');

test('Login,  Log out', async ({ page }) => {

  await page.goto('https://vdc-test.xelon.ch/');
  await page.waitForURL('https://vdc-test.xelon.ch/login')

  const emailField = page.locator('[data-cy="email-input"]')
  await emailField.fill('.agency')

  const passlField = page.locator('[data-cy="password-input"]')
  await passlField.fill('12')

  const buttonLogin = page.locator('[data-cy="login-button"]')
  await buttonLogin.click()

  await page.waitForURL('https://vdc-test.xelon.ch/')
  await page.locator('h1', { hasText: 'Dashboard' })



  await page.locator('[data-cy="header-account-button"]').click()
  await page.locator('[data-cy="header-logout-button"]').click()

  await page.waitForURL('https://vdc-test.xelon.ch/login')


  const loginForm = page.locator('[data-cy="login-button"]')
  await expect(loginForm).toHaveText('Log in');





      // .toHaveText('3 items left');













  // await page.locator('#my-organization').click()





});
