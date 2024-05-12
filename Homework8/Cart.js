class Cart{

    constructor() {
        this._items = [];
        this._totalPrice = 0;
    }

    addToCart(item){
        this._items.push(item);
        this._totalPrice += item.price;
    }

}