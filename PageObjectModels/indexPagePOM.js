exports.IndexPage = 
class IndexPage{

    constructor(page){

        this.page = page
        this.sideMenu = '#react-burger-menu-btn'
        this.cartIcon = '.shopping_cart_link'
        this.filter = ".product_sort_container"
        this.twitter = "a[href='https://twitter.com/saucelabs']"
        this.facebook = "a[href='https://www.facebook.com/saucelabs']"
        this.linkedIn = "a[href='https://www.linkedin.com/company/sauce-labs/']"
        this.cartNumberBadge = "//span[@class='shopping_cart_badge']"

        this.backpackCartBtn = "#add-to-cart-sauce-labs-backpack"
        this.bikelightCartBtn = '#add-to-cart-sauce-labs-bike-light'
        this.tshirtCartBtn = '#add-to-cart-sauce-labs-bolt-t-shirt'
        this.jacketCartBtn = '#add-to-cart-sauce-labs-fleece-jacket'
        this.onesieCartBtn = '#add-to-cart-sauce-labs-onesie'
        this.redTshirtCartBtn = '#add-to-cart-test.allthethings()-t-shirt-(red)'
        this.allCartButtons = '.btn'
        this.removeCartBtn = '#remove-sauce-labs-backpack'

        this.backPackItem = '#item_4_title_link'
        this.allItemsSidebar = '#inventory_sidebar_link'
        this.aboutSidebar = '#about_sidebar_link'
        this.logOutSidebar = '#logout_sidebar_link'
        this.resetApp = '#reset_sidebar_link'

        this.allItemNames = '.inventory_item_name '
        this.aToZFilterOption = "option[value='az']"
        this.hiddenFilterOptions = "select[class='product_sort_container'] option"
        this.allPrices = '.inventory_item_price'
        this.backtoProducts = '#back-to-products'

        this.backPackLink = '#item_4_title_link'
        this.lightLink = '#item_0_title_link'
        this.jacketkLink = '#item_5_title_link'
        this.thishirtLink = "#item_1_title_link"
        this.onesieLink = '#item_2_title_link'
        this.redshirtLink = '#item_3_title_link'
        
    }

    async addAllItemsToCart(){

        let allBtns = await this.page.$$(this.allCartButtons)

        for(let btn of allBtns){
            await btn.click()
        }

    }

    async checkBtnText(){

        let textConfirm = false
        let removeBtns = await this.page.$$(this.removeCartBtn)

        for(let removeBtn of removeBtns){

            if(await removeBtn.textContent() == 'Remove'){

                textConfirm = true

            }

        }

        return textConfirm

    }

    async clickCart(){

        await this.page.locator(this.cartIcon).click()

    }

    async clickItem(locator){

        await this.page.locator(locator).click()

    }

    async filterCheck(selectOptionValue){

        await this.page.locator(this.filter).selectOption(selectOptionValue)

        if(selectOptionValue == 'az'){

            let filterWorking = false

            let allItemNames = await this.page.$$(this.allItemNames)
            let firstItemName = await allItemNames[0].textContent()
            let lastItemName = await allItemNames[allItemNames.length - 1].textContent()

          if(firstItemName < lastItemName){

            filterWorking = true

          } 
          return filterWorking
        } 
        else if(selectOptionValue == 'za'){

            let filterWorking = false

            let allItemNames = await this.page.$$(this.allItemNames)
            let firstItemName = await allItemNames[0].textContent()
            let lastItemName = await allItemNames[allItemNames.length - 1].textContent()

          if(firstItemName > lastItemName){

            filterWorking = true

          } 
          return filterWorking
        }
        else if(selectOptionValue == 'lohi'){

            let filterWorking = false

            let allItemPrices = await this.page.$$(this.allPrices)
            let lowestPrice = await allItemPrices[0].textContent()
            let highestPrice = await allItemPrices[allItemPrices.length - 1].textContent()
            
            let removeDollarLowest = await lowestPrice.replace('$', '')
            let removeDollarHighest = await highestPrice.replace('$', '')

            let priceLow = await parseFloat(removeDollarLowest)
            let priceHigh = await parseFloat(removeDollarHighest)

            if(priceLow < priceHigh){

                filterWorking = true

            }
            return filterWorking
        }
        else if(selectOptionValue == 'hilo'){

            let filterWorking = false

            let allItemPrices = await this.page.$$(this.allPrices)
            let highestPrice = await allItemPrices[0].textContent()
            let lowestPrice = await allItemPrices[allItemPrices.length - 1].textContent()
            
            let removeDollarLowest = await lowestPrice.replace('$', '')
            let removeDollarHighest = await highestPrice.replace('$', '')

            let priceLow = await parseFloat(removeDollarLowest)
            let priceHigh = await parseFloat(removeDollarHighest)

            if(priceHigh > priceLow){

                filterWorking = true

            }
            return filterWorking
        }
        
    }
    
}