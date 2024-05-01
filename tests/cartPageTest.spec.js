const {test, expect} = require ('@playwright/test')
import {IndexPage} from '../PageObjectModels/indexPagePOM'
import {LoginPage} from '../PageObjectModels/loginPagePOM'
import credentials from '../JsonFiles/credentials.json'
import {CartPage} from '../PageObjectModels/cartPagePOM'
import urls from '../JsonFiles/urls.json'
import itemNames from '../JsonFiles/itemNames.json'


test.describe('Testing shoping cart page buttons', ()=>{

    test.beforeEach("Log in", async({page})=>{

        const loginPage = new LoginPage(page)

        await loginPage.goToPage()
        await loginPage.logIn(credentials.standardUsername, credentials.password)

    })

    test("Check if remove from cart button is working", async({page})=>{

        const indexPage = new IndexPage(page)

        await indexPage.clickItem(indexPage.backpackCartBtn)
        await indexPage.clickItem(indexPage.cartIcon)
        await indexPage.clickItem(indexPage.removeCartBtn)
        await expect(page.locator(indexPage.backPackItem)).not.toBeVisible()
        await expect(page.locator(indexPage.cartNumberBadge)).not.toBeVisible()

    })

    test('Check if continue shoping button is working', async({page})=>{

        const indexPage = new IndexPage(page)
        const cartPage = new CartPage(page)

        await indexPage.clickItem(indexPage.cartIcon)
        await indexPage.clickItem(cartPage.contShoping)
        await expect(page.url()).toBe(urls.indexUrl)

    })

    test('Check if checkout button is working', async({page})=>{

        const indexPage = new IndexPage(page)
        const cartPage = new CartPage(page)

        await indexPage.clickItem(indexPage.cartIcon)
        await indexPage.clickItem(cartPage.checkoutBtn)
        await expect(page.url()).toBe(urls.checkoutUrl)
        
    })
})