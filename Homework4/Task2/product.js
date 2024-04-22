let product = {
    _name: "laptop",
    _price: 1000,
    _quantity: 5,
    getTotalPrice(){
        return Object.getOwnPropertyDescriptor(this, '_price').value * Object.getOwnPropertyDescriptor(this, '_quantity').value;
    }
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

console.log(product.getTotalPrice());

module.exports = {product};
