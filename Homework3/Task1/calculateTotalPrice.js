function calculateTotalPrice(products){
    let totalPrice = 0;

    for(let product of products){
        //validate price>0?
        totalPrice+=product.price;
    }

    return totalPrice;
}

module.exports = {calculateTotalPrice};

