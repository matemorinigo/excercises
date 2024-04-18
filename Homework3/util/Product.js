class Product{
    constructor(codProd, description, price) {
        this._codProd = codProd;
        this._description = description;
        this._price = price;
    }

    get codProd() {
        return this._codProd;
    }

    set codProd(value) {
        this._codProd = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}

module.exports = {Product}