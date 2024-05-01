const {test, expect} = require ('@playwright/test')
import {IndexPage} from '../PageObjectModels/indexPagePOM'
import {LoginPage} from '../PageObjectModels/loginPagePOM'
import credentials from '../JsonFiles/credentials.json'
import urls from '../JsonFiles/urls.json'


test.describe("Testing if index page item links and back to product link redirect to the correct page", ()=>{

    test.beforeEach('Log in', async({page})=>{

        const loginPage = new LoginPage(page)

        await loginPage.goToPage()
        await loginPage.logIn(credentials.standardUsername, credentials.password)

    })

    test('Check if backpack link and its back to product link redirect to the correct page', async({page})=>{

        const indexPage =  new IndexPage(page)

        await indexPage.clickItem(indexPage.backPackLink)
        await expect(page.url()).toBe(urls.backPackUrl)

        await indexPage.clickItem(indexPage.backtoProducts)
        await expect(page.url()).toBe(urls.indexUrl)

    })

    test('Check if bike light link and its back to product link redirect to the correct page', async({page})=>{

        const indexPage =  new IndexPage(page)

        await indexPage.clickItem(indexPage.lightLink)
        await expect(page.url()).toBe(urls.lightUrl)

        await indexPage.clickItem(indexPage.backtoProducts)
        await expect(page.url()).toBe(urls.indexUrl)
        
    })

    test('Check if tshirt link and its back to product link redirect to the correct page', async({page})=>{

        const indexPage =  new IndexPage(page)

        await indexPage.clickItem(indexPage.thishirtLink)
        await expect(page.url()).toBe(urls.tshirtUrl)

        await indexPage.clickItem(indexPage.backtoProducts)
        await expect(page.url()).toBe(urls.indexUrl)
        
    })

    test('Check if jacket link and its back to product link redirect to the correct page', async({page})=>{

        const indexPage =  new IndexPage(page)

        await indexPage.clickItem(indexPage.jacketkLink)
        await expect(page.url()).toBe(urls.jacketUrl)

        await indexPage.clickItem(indexPage.backtoProducts)
        await expect(page.url()).toBe(urls.indexUrl)
        
    })

    test('Check if onesie link and its back to product link redirect to the correct page', async({page})=>{

        const indexPage =  new IndexPage(page)

        await indexPage.clickItem(indexPage.onesieLink)
        await expect(page.url()).toBe(urls.onesieUrl)

        await indexPage.clickItem(indexPage.backtoProducts)
        await expect(page.url()).toBe(urls.indexUrl)
        
    })

    test('Check if red shirt link and its back to product link redirect to the correct page', async({page})=>{

        const indexPage =  new IndexPage(page)

        await indexPage.clickItem(indexPage.redshirtLink)
        await expect(page.url()).toBe(urls.redShirtUrl)

        await indexPage.clickItem(indexPage.backtoProducts)
        await expect(page.url()).toBe(urls.indexUrl)
        
    })

})