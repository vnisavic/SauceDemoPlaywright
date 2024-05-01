const {test, expect} = require ('@playwright/test')
import {IndexPage} from '../PageObjectModels/indexPagePOM'
import {LoginPage} from '../PageObjectModels/loginPagePOM'
import {CheckoutPage} from '../PageObjectModels/checkoutPagePOM'
import {CartPage} from '../PageObjectModels/cartPagePOM'
import credentials from '../JsonFiles/credentials.json'
import errorMsg from '../JsonFiles/errorText.json'
import urls from '../JsonFiles/urls.json'

test.describe('Testing checkout page', ()=>{

    test.beforeEach('Log In and go to checkout page', async({page})=>{

        const loginPage = new LoginPage(page)
        const indexPage = new IndexPage(page)
        const cartPage = new CartPage(page)

        await loginPage.goToPage()
        await loginPage.logIn(credentials.standardUsername, credentials.password)

        await indexPage.clickItem(indexPage.cartIcon)
        await indexPage.clickItem(cartPage.checkoutBtn)

    })

    test('Fill checkout form without first name', async({page})=>{

        const checkoutPage = new CheckoutPage(page)
        const indexPage = new IndexPage(page)

        await checkoutPage.fillCheckout('', 'Lastname', '32300')
        await indexPage.clickItem(checkoutPage.continueBtn)
        await expect(page.locator(checkoutPage.errorText)).toHaveText(errorMsg.checkoutUsernameError)

    })

    test('Fill checkout form without last name ', async({page})=>{

        const checkoutPage = new CheckoutPage(page)
        const indexPage = new IndexPage(page)

        await checkoutPage.fillCheckout('Firstname', '', '32300')
        await indexPage.clickItem(checkoutPage.continueBtn)
        await expect(page.locator(checkoutPage.errorText)).toHaveText(errorMsg.checkoutLastnameError)
        
    })

    test('Fill checkout form without postal code ', async({page})=>{

        const checkoutPage = new CheckoutPage(page)
        const indexPage = new IndexPage(page)

        await checkoutPage.fillCheckout('Firstname', 'Lastname', '')
        await indexPage.clickItem(checkoutPage.continueBtn)
        await expect(page.locator(checkoutPage.errorText)).toHaveText(errorMsg.checkoutPostalCodeError)
        
    })

    test('All checkout inputs empty', async({page})=>{

        const checkoutPage = new CheckoutPage(page)
        const indexPage = new IndexPage(page)

        await checkoutPage.fillCheckout('', '', '')
        await indexPage.clickItem(checkoutPage.continueBtn)
        await expect(page.locator(checkoutPage.errorText)).toHaveText(errorMsg.checkoutUsernameError)
        
    })

    test('Fill all checkout inputs and click continue btn', async({page})=>{

        const checkoutPage = new CheckoutPage(page)
        const indexPage = new IndexPage(page)

        await checkoutPage.fillCheckout('Firstname', 'Lastname', '32300')
        await indexPage.clickItem(checkoutPage.continueBtn)
        await expect(page.url()).toBe(urls.checkoutStepTwo)

    })

    test('Check if cancel button is working', async({page})=>{

        const checkoutPage = new CheckoutPage(page)
        const indexPage = new IndexPage(page)

        await indexPage.clickItem(checkoutPage.cancelBtn)
        await expect(page.url()).toBe(urls.cartPageUrl)
        
    })
})

