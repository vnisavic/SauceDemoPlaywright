const { expect } = require("@playwright/test");

exports.CartPage = 
class CartPage{

    constructor(page){

        this.page = page
        this.contShoping = '#continue-shopping'
        this.checkoutBtn = '#checkout'

    }

   
}