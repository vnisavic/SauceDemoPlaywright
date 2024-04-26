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
    
}