const {test, expect} = require ('@playwright/test')

import {IndexPage} from '../PageObjectModels/indexPagePOM'
import {LoginPage} from '../PageObjectModels/loginPagePOM'
import credentials from '../JsonFiles/credentials.json'
import urls from '../JsonFiles/urls.json'
import { url } from 'inspector'

test.describe('Testing the index page side menu functionality', ()=>{

    test.beforeEach('Log in', async({page})=>{

        const loginPage = new LoginPage(page)
        
        await loginPage.goToPage()
        await loginPage.logIn(credentials.standardUsername, credentials.password)

    })

    test('Check if all items side menu button is working', async({page})=>{

        const indexPage = new IndexPage(page)

        await indexPage.clickItem(indexPage.backPackItem)
        await indexPage.clickItem(indexPage.sideMenu)
        await indexPage.clickItem(indexPage.allItemsSidebar)
        await expect(page.url()).toBe(urls.indexUrl)

    })

    test('Check if about side menu button is working', async ({page})=>{

        const indexPage = new IndexPage(page)

        await indexPage.clickItem(indexPage.sideMenu)
        await indexPage.clickItem(indexPage.aboutSidebar)
        await expect(page.url()).toBe(urls.aboutSidebarLink)

    })

    test('Check if logout side menu button is working', async ({page})=>{

        const indexPage = new IndexPage(page)

        await indexPage.clickItem(indexPage.sideMenu)
        await indexPage.clickItem(indexPage.logOutSidebar)
        await expect(page.url()).toBe(urls.loginUrl)

    })

    test('Test if reset app state side menu button is working', async({page})=>{

        const indexPage = new IndexPage(page)

        await indexPage.clickItem(indexPage.backpackCartBtn)
        await expect(page.locator(indexPage.cartNumberBadge)).toHaveText('1')

        await indexPage.clickItem(indexPage.sideMenu)
        await indexPage.clickItem(indexPage.resetApp)
        await expect(page.locator(indexPage.cartNumberBadge)).not.toBeVisible()

        await expect.soft(page.locator(indexPage.backpackCartBtn)).toBeVisible() //test fails, remove from cart button does not change its state
        await expect.soft(page.locator(indexPage.backpackCartBtn)).toHaveText('Add to cart') //soft expectr so the test would continue

        
    })
})