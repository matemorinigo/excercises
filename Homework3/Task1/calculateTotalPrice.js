function calculateTotalPrice(products){
    let totalPrice = 0;

    for(let product of products){
        //validate price>0?
        totalPrice+=product;
    }

    return totalPrice;
}

module.exports = {calculateTotalPrice};

console.log(calculateTotalPrice([10,10,10,20,25]));