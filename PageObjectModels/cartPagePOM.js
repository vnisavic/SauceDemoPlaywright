const { expect } = require("@playwright/test");

exports.CartPage = 
class CartPage{

    constructor(page){

        this.page = page
        this.allItems = '.inventory_item_name'

    }

   
}