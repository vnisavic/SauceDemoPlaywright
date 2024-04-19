const {test, expect} = require ('@playwright/test')

import credentials from '../JsonFiles/credentials.json'
import { LoginPage } from '../PageObjectModels/loginPagePOM'
import urls from '../JsonFiles/urls.json'
import errorText from '../JsonFiles/errorText.json'

test.describe('Testing login functionality', ()=>{

    test.beforeEach('Open saucedemo app', async({page})=>{

        const loginPage = new LoginPage(page)
        await loginPage.goToPage()

    })

    test('Login with standard user', async({page})=>{

        const loginPage = new LoginPage(page)

        await loginPage.logIn(credentials.standardUsername, credentials.password)
        await expect(page.url()).toEqual(urls.indexUrl)

    })

    test('Login with locked out user', async({page})=>{

        const loginPage = new LoginPage(page)

        await loginPage.logIn(credentials.lockedOutUsername, credentials.password)
        await expect(page.locator(loginPage.errorText)).toHaveText(errorText.errorText)

    })

    test('Login with problem user', async({page})=>{

        const loginPage = new LoginPage(page)

        await loginPage.logIn(credentials.problemUsername, credentials.password)
        await expect(page.url()).toEqual(urls.indexUrl)

    })

    test('Login with performance glitch user', async({page})=>{

        const loginPage = new LoginPage(page)

        await loginPage.logIn(credentials.perfGlitchUsername, credentials.password)
        await expect(page.url()).toEqual(urls.indexUrl)

    })

    test('Login with error user', async({page})=>{

        const loginPage = new LoginPage(page)

        await loginPage.logIn(credentials.errorUsername, credentials.password)
        await expect(page.url()).toEqual(urls.indexUrl)

    })

    test('Login with visual user', async({page})=>{

        const loginPage = new LoginPage(page)

        await loginPage.logIn(credentials.visualUsername, credentials.password)
        await expect(page.url()).toEqual(urls.indexUrl)

    })

    test('Login with empty username and valid password', async({page})=>{

        const loginPage = new LoginPage(page)

        await loginPage.logIn("", credentials.password)
        await expect(page.locator(loginPage.errorText)).toHaveText(errorText.usernameEmptyText)

    })

    test('Login with empty password and valid username', async({page})=>{

        const loginPage = new LoginPage(page)

        await loginPage.logIn(credentials.standardUsername, "")
        await expect(page.locator(loginPage.errorText)).toHaveText(errorText.passwordEmptyText)

    })

    test('Login with both inputs empty', async({page})=>{

        const loginPage = new LoginPage(page)

        await loginPage.logIn("", "")
        await expect(page.locator(loginPage.errorText)).toHaveText(errorText.usernameEmptyText)

    })

    test('Login with valid username and invalid password', async({page})=>{

        const loginPage = new LoginPage(page)

        await loginPage.logIn(credentials.standardUsername, credentials.invalidPassword)
        await expect(page.locator(loginPage.errorText)).toHaveText(errorText.userOrPassInvalid)

    })

    test('Login with invalid username and valid password', async({page})=>{

        const loginPage = new LoginPage(page)

        await loginPage.logIn(credentials.invalidUsername, credentials.password)
        await expect(page.locator(loginPage.errorText)).toHaveText(errorText.userOrPassInvalid)

    })
    
})