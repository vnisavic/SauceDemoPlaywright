exports.CheckoutPage = 
class CheckoutPage{

    constructor(page){

        this.page = page
        this.firstName = '#first-name'
        this.lastName = '#last-name'
        this.postalCode = '#postal-code'
        this.cancelBtn = '#cancel'
        this.continueBtn = '#continue'
        this.errorText = "h3[data-test='error']"

    }

    async fillCheckout(firstName, lastName, postCode){

        await this.page.locator(this.firstName).fill(firstName)
        await this.page.locator(this.lastName).fill(lastName)
        await this.page.locator(this.postalCode).fill(postCode)
        
    }
}