const Order = require('./Order').Order;
const Book = require('./Book').Book;
class Cart{

    constructor() {
        this._items = [];
        this._partialPrice = 0;
        this._order = null;
    }

    addToCart(item){
        if(item._availability){
            this._items.push(item);
            this._partialPrice += item.price;
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
            this._items.filter((product) => {
                //comparison between products
            })
        }
    }

    showCart(){
        console.log(this._items);
    }

    placeOrder(){
        if(this._items === [])
            throw new Error("Cart is empty");
        else
            this._order = new Order(this._items, this._partialPrice);
    }

    showProductsOrdered(){
        if(this._order === null)
            throw new Error("Order is not placed yet");
        else
            this._order.showProductsOrdered();
    }

    showTotalPrice(){
        if(this._order === null)
            throw new Error("Order is not placed yet");
        else
            this._order.showTotalPrice();
    }

}



module.exports = {Cart};