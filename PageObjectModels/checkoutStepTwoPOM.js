exports.CheckoutTwo = 
class CheckoutTwo{

    constructor(page){

        this.page = page
        this.totalPrice = '.summary_total_label'
        this.finishBtn = '#finish'
        this.backHome = '#back-to-products'

    }

    async getTotalPrice(){

        let priceString = await this.page.locator(this.totalPrice).textContent()

        let priceNumberOnly = await priceString.replace('Total: $', "")
        let priceFloat = await parseFloat(priceNumberOnly)
        return priceFloat

    }
}