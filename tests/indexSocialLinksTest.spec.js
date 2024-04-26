const {test, expect, chromium} = require ('@playwright/test')

test('Test if twitter social media link opens the right page', async()=>{

    const browser = await chromium.launch()
    const context = await browser.newContext()

    const pageOne = await context.newPage()

    await pageOne.goto('https://www.saucedemo.com/')
    await pageOne.getByPlaceholder('Username').fill('standard_user')
    await pageOne.getByPlaceholder('Password').fill('secret_sauce')
    await pageOne.locator('#login-button').click()

    const pagePromise = context.waitForEvent('page')

    await pageOne.locator("a[href='https://twitter.com/saucelabs']").click()
    const newPage = await pagePromise
    await expect(newPage).toHaveURL('https://twitter.com/saucelabs')

})

test('Test if facebook social media link opens the right page', async()=>{

    const browser = await chromium.launch()
    const context = await browser.newContext()

    const pageOne = await context.newPage()

    await pageOne.goto('https://www.saucedemo.com/')
    await pageOne.getByPlaceholder('Username').fill('standard_user')
    await pageOne.getByPlaceholder('Password').fill('secret_sauce')
    await pageOne.locator('#login-button').click()

    const pagePromise = context.waitForEvent('page')

    await pageOne.locator("a[href='https://www.facebook.com/saucelabs']").click()
    const newPage = await pagePromise
    await expect(newPage).toHaveURL('https://www.facebook.com/saucelabs')

})

test('Test if linkedIn social media link opens the right page', async()=>{

    const browser = await chromium.launch()
    const context = await browser.newContext()

    const pageOne = await context.newPage()

    await pageOne.goto('https://www.saucedemo.com/')
    await pageOne.getByPlaceholder('Username').fill('standard_user')
    await pageOne.getByPlaceholder('Password').fill('secret_sauce')
    await pageOne.locator('#login-button').click()

    const pagePromise = context.waitForEvent('page')

    await pageOne.locator("a[href='https://www.linkedin.com/company/sauce-labs/']").click()
    const newPage = await pagePromise
    await expect(newPage.url()).toContain('https://www.linkedin.com/')

})