const {calculateDiscountedPrice} = require('./calculateDiscountedPrice');
const {Product} = require('../util/Product');
const {calculateTotalPrice} = require("./calculateTotalPrice");

let products = [new Product(1,"a",10), new Product(2,"b",15), new Product(3,"c",20)];

console.log(calculateDiscountedPrice(products, 50));

try{
    console.log(calculateDiscountedPrice(products, -1));
}catch (e) {
    console.error(e);
}

console.log(calculateTotalPrice(products));
