class Order{
    static orders = 0;

    constructor(productsOrdered, totalPrice) {
        this._productsOrdered = productsOrdered;
        this._totalPrice = totalPrice;
    }
}