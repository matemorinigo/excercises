function calculateDiscountedPrice(products, discount){
    let updatedProducts = [];

    for(let product of products){
        //validate price>0?
        updatedProducts.push((product-(product*(discount/100))));
    }

    return updatedProducts;
}

module.exports = {calculateDiscountedPrice};

console.log(calculateDiscountedPrice([50,100,200,250], 50));