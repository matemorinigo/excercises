function customFilterUnique(arr, callback){
    let mapAppearances = new Map();
    let newArr = [];

    for(let obj of arr){
        let key = JSON.stringify(obj);

        if(mapAppearances.has(key))
            mapAppearances.set(key,Number(mapAppearances.get(key))+1)
        else
            mapAppearances.set(key,1);
    }

    for(let obj of arr){
        let key = JSON.stringify(obj);
        if(mapAppearances.get(key) === 1 && callback(obj))
            newArr.push(obj)

    }

    return newArr;
}



module.exports = {customFilterUnique};