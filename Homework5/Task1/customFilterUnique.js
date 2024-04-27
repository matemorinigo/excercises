function customFilterUnique(arr, callback){
    let newArr = [];

    for(let obj of arr){
        if(callback(obj))
            newArr.push(obj);
    }

    return newArr;
}




module.exports = {customFilterUnique};