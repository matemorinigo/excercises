function getTotalPrice(obj){
    return Object.getOwnPropertyDescriptor(obj, '_price').value * Object.getOwnPropertyDescriptor(obj, '_quantity').value;
}

module.exports = {getTotalPrice};