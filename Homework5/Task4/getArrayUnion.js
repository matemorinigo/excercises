function getArrayUnion(arr1,arr2){
    let union = [];
    for(let obj of arr1){
        if(!union.includes(obj))
            union.push(obj);
    }
    for(let obj of arr2){
        if(!union.includes(obj))
            union.push(obj);
    }

    return union;
}

module.exports = {getArrayUnion};

let a = [1,2,2,2,3,4,5,6,12]
let b = [2,4,6,8,12];

console.log(getArrayUnion(a,b))