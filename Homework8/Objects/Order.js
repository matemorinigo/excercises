class Order{
    static orders = 0;

    constructor(productsOrdered, totalPrice) {
        this._orderID = ++Order.orders;
        this._productsOrdered = productsOrdered;
        this._totalPrice = totalPrice;
        this.#decrementAvailability(productsOrdered);
    }

    showProductsOrdered(){
        console.log(this._productsOrdered);
    }

    showTotalPrice(){
        console.log(this._totalPrice);
    }

    #decrementAvailability(productsOrdered){
        for(let product of productsOrdered){
            --product._availability;
        }
    }
}

module.exports = {Order};