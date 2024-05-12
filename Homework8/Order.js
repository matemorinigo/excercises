class Order{
    static orders = 0;

    constructor(productsOrdered, totalPrice) {
        this._orderID = ++Order.orders;
        this._productsOrdered = productsOrdered;
        this._totalPrice = totalPrice;
        this.#decrementAvailability(productsOrdered);
    }

    #decrementAvailability(productsOrdered){
        for(product of productsOrdered){
            --product._availability;
        }
    }
}

module.exports = {Order};