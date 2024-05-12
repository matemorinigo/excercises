const Order = require('./Order').Order;
const Book = require('./Book').Book;
class Cart{

    constructor() {
        this._items = [];
        this._totalPrice = 0;
    }

    addToCart(item){
        if(item._availability){
            this._items.push(item);
            this._totalPrice += item.price;
        }
        else
            throw new Error("That product is not available");

    }

    clearCart(){
        this._items = [];
        this._totalPrice = 0;
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

    finishOrder(){
        if(this._items === [])
            throw new Error("Cart is empty");
        else
            return new Order(this._items, this._totalPrice);
    }

}

let a = new Book('a','a','a', 12.9, 10);
let b = new Book('b','b','b', 12.9, 10);
let c = new Book('c','c','c', 12.9, 10);

let cart = new Cart();

cart.addToCart(a);
cart.addToCart(b);
cart.removeFromCart(b);

cart.showCart();



module.exports = {Cart};