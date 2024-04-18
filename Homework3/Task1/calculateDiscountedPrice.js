function calculateDiscountedPrice(products, discount){
    let updatedProducts = [];

    if(discount<0)
        throw Error("Discount cannot be negative");

    for(let product of products){

        if(product.price>0)
            updatedProducts.push((product.price-(product.price*(discount/100))));

    }

    return updatedProducts;
}

module.exports = {calculateDiscountedPrice};

