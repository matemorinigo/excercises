const Cart = require('Cart').Cart;
class User{

    static _users = 0;
    constructor(name, surname, email, address) {
        this._name = name;
        this._surname = surname;
        this._email = email;
        this._address = address;
        this._userID = ++User._users;
        //option 2
        this._cart = new Cart();
    }
    //option 2
    addToCart(item){
        this._cart.addToCart(item);
    }

    finishBuying(){
        return this._cart.finishOrder();
    }



    //option 1
    createCart(){
        return new Cart()
    }

}

