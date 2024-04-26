const {test, expect} = require ('@playwright/test')
import {IndexPage} from '../PageObjectModels/indexPagePOM'
import {LoginPage} from '../PageObjectModels/loginPagePOM'
import credentials from '../JsonFiles/credentials.json'

test.describe('Testing index page filter functionality', async()=>{

    test.beforeEach('Log in', async({page})=>{

        const loginPage = new LoginPage(page)
        
        await loginPage.goToPage()
        await loginPage.logIn(credentials.standardUsername, credentials.password)

    })

    test('Check if A-Z filtering is working', async({page})=>{

        const indexPage = new IndexPage(page)

        let testFilter = await indexPage.filterCheck('az')
        await expect(testFilter).toBeTruthy()

    })

    test('Check if Z-A filtering is working', async({page})=>{

        const indexPage = new IndexPage(page)

        let testFilter = await indexPage.filterCheck('za')
        await expect(testFilter).toBeTruthy()

    })

    test('Check if low to high filtering is working', async({page})=>{

        const indexPage = new IndexPage(page)

        let testFilter = await indexPage.filterCheck('lohi')
        await expect(testFilter).toBeTruthy()

    })

    test('Check if high to low filtering is working', async({page})=>{

        const indexPage = new IndexPage(page)

        let testFilter = await indexPage.filterCheck('hilo')
        await expect(testFilter).toBeTruthy()

    })
    
})