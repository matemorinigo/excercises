const Cart = require('./Cart').Cart;
class User{

    static _users = 0;
    constructor(name, surname, email, address) {
        this._name = name;
        this._surname = surname;
        this._email = email;
        this._address = address;
        this._userID = ++User._users;
        this._cart = new Cart();
        this._orders = [];
    }

    addToCart(item){
        this._cart.addToCart(item);
    }

    clearCart(){
        this._cart.clearCart();
    }

    removeFromCart(item){
        this._cart.removeFromCart(item);
    }

    showCart(){
        this._cart.showCart();
    }

    placeOrder(){
        this._orders.push(this._cart.placeOrder());
        this._cart.clearCart();
    }

    showOrdersPlaced(){
        if(this._orders.length === 0)
            console.log("No orders placed yet");
        else
            console.log(this._orders);
    }

    showProductsOrdered(orderID){
       for(let order in this._orders){
           if(order.orderID === orderID){
               order.showProductsOrdered();
               return;
           }
       }

       console.log("There is no order with that ID");
    }

    showPartialPrice(){
        this._cart.showPartialPrice();
    }

}

module.exports = {User};
