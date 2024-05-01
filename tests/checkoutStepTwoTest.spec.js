const {test, expect} = require ('@playwright/test')
import {IndexPage} from '../PageObjectModels/indexPagePOM'
import {LoginPage} from '../PageObjectModels/loginPagePOM'
import {CheckoutPage} from '../PageObjectModels/checkoutPagePOM'
import {CartPage} from '../PageObjectModels/cartPagePOM'
import credentials from '../JsonFiles/credentials.json'
import itemNames from '../JsonFiles/itemNames.json'
import { CheckoutTwo } from '../PageObjectModels/checkoutStepTwoPOM'
import urls from '../JsonFiles/urls.json'


test.describe('Testing checout step two page', ()=>{

    test.beforeEach('Log in, add all items to cart and go to checkout step two', async({page})=>{

        const loginPage = new LoginPage(page)
        const indexPage = new IndexPage(page)
        const cartPage = new CartPage(page)
        const checkoutPage =  new CheckoutPage(page)

        await loginPage.goToPage()
        await loginPage.logIn(credentials.standardUsername, credentials.password)

        await indexPage.addAllItemsToCart()
        await indexPage.clickCart()
        
        await indexPage.clickItem(cartPage.checkoutBtn)
        await checkoutPage.fillCheckout('Firstname', 'Lastname', '32300')
        await indexPage.clickItem(checkoutPage.continueBtn)

    })

    test('Check if all added items are present in checkout step two', async({page})=>{

        let allItemNames = await page.$$('.inventory_item_name')
    
        for(let i=0; i<allItemNames.length; i++){
    
            let itemNameText = await allItemNames[i].textContent()
            expect(itemNameText).toBe(itemNames[i].elName)  //pokusaj da ovo spakujes u funkciju
    
        }

    })

    test('Verify that the total price is correct', async({page})=>{

       const checkoutTwo = new CheckoutTwo(page)

       let price = await checkoutTwo.getTotalPrice()
       await expect(price).toEqual(140.34)

    })

    test('Check if cancel button is working', async({page})=>{

        const checkoutPage =  new CheckoutPage(page)
        const indexPage = new IndexPage(page)

        await indexPage.clickItem(checkoutPage.cancelBtn)
        await expect(page.url()).toBe(urls.indexUrl)

    })

    test('Check if finish button is working', async({page})=>{

        const indexPage = new IndexPage(page)
        const checkoutTwo = new CheckoutTwo(page)

        await indexPage.clickItem(checkoutTwo.finishBtn)
        await expect(page.url()).toBe(urls.checkoutComplete)

    })

    test('Check if back home button is working', async({page})=>{

        const indexPage = new IndexPage(page)
        const checkoutTwo = new CheckoutTwo(page)

        await indexPage.clickItem(checkoutTwo.finishBtn)
        await indexPage.clickItem(checkoutTwo.backHome)
        await expect(page.url()).toBe(urls.indexUrl)

    })

})