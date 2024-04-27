function getArrayIntersection(arr1,arr2){
    let intersection = [];
    for(let obj of arr1){
        if(arr2.includes(obj)){
            intersection.push(obj);
        }
    }

    return intersection;
}

module.exports = {getArrayIntersection};

let a = [1,2,3,4,5,6];
let b = [2,4,6,8,10,12];

console.log(getArrayIntersection(a,b));



