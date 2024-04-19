
exports.CartPage = 
class CartPage{

    constructor(page){

        this.page = page
        this.allItems = '.inventory_item_name'

    }

    async checkItemsInCart(){

        let itemsInCart = await this.page.$$(this.allItems)

        for(let item of itemsInCart){

            let itemNameText = await item.textContent()
            console.log('Item in cart:', itemNameText);
            
        }

        
    }
}