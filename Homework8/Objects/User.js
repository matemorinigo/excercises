const Cart = require('Homework8/Objects/Cart').Cart;
class User{

    static _users = 0;
    constructor(name, surname, email, address) {
        this._name = name;
        this._surname = surname;
        this._email = email;
        this._address = address;
        this._userID = ++User._users;
        this._cart = new Cart();
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
        return this._cart.placeOrder();
    }

    showProductsOrdered(){
        this._cart.showProductsOrdered();
    }

    showTotalPrice(){
        this._cart.showTotalPrice();
    }

}

