const Order = require('./Order').Order;
class Cart{

    constructor() {
        this._items = [];
        this._partialPrice = 0;
    }

    addToCart(item){
        if(item._availability){
            this._items.push(item);
            this._partialPrice += Number(item.price);
        }
        else
            throw new Error("That product is not available");

    }

    clearCart(){
        this._items = [];
        this._partialPrice = 0;
    }

    removeFromCart(item){
        if(!this._items.includes(item))
            throw new Error("That item is not in your cart")
        else{
            this._items = this._items.filter((product) => {
                return !product.equals(item);
            })
        }
    }

    showCart(){
        if(this._items.length === 0)
            console.log("Cart is empty");
        else
            console.log(this._items);
    }

    placeOrder(){
        if(this._items === [])
            throw new Error("Cart is empty");
        else
            return new Order(this._items, this._partialPrice);
    }


    showPartialPrice(){
        console.log(this._partialPrice);
    }

}



module.exports = {Cart};