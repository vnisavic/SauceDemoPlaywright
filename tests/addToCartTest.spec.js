const {test, expect} = require ('@playwright/test')

import {IndexPage} from '../PageObjectModels/indexPagePOM'
import {LoginPage} from '../PageObjectModels/loginPagePOM'
import credentials from '../JsonFiles/credentials.json'
import { CartPage } from '../PageObjectModels/cartPagePOM'
import itemNames from '../JsonFiles/itemNames.json'

test.describe('Testing add to cart button functionality',()=>{

    test.beforeEach('Log in', async ({page})=>{

        const loginPage = new LoginPage(page)

        await loginPage.goToPage()
        await loginPage.logIn(credentials.standardUsername, credentials.password)

    })

    test('Add item to cart and check cart badge number', async({page})=>{

        const indexPage = new IndexPage(page)

        await indexPage.addAllItemsToCart()
        await expect(page.locator(indexPage.cartNumberBadge)).toHaveText('6')
        
    })

    test('Remove items from cart and check the badge number', async({page})=>{

        const indexPage = new IndexPage(page)
        
        await indexPage.addAllItemsToCart()
        await indexPage.addAllItemsToCart() //calling the function again to remove buttons from cart
        await expect(page.locator(indexPage.cartNumberBadge)).not.toBeVisible()

    })

    test('Check if add to cart button text is correct when item is added to cart', async({page})=>{

        const indexPage = new IndexPage(page)

        await indexPage.addAllItemsToCart()
        const textConfirm = await indexPage.checkBtnText()
        await expect(textConfirm).toBeTruthy()

    })

    test.only('Check if the items are actually added to cart', async({page})=>{

        const indexPage = new IndexPage(page)
        await indexPage.addAllItemsToCart()
        await indexPage.clickCart()

        const cartPage = new CartPage(page)
        await cartPage.checkItemsInCart()

    })
})