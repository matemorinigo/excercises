let product = {
    _name: "laptop",
    _price: 1000,
    _quantity: 5
}

Object.defineProperties(product, {
    _price:{
        writable: false,
        enumerable:false
    },
    _quantity:{
        writable: false,
        enumerable: false
    }
});

module.exports = {product};
