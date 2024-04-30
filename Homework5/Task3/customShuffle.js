//Is this an efficient algorithm?
const {deepCloneObject} = require("../../Homework4/Task6/deepCloneObject");

//Option 1

// function customShuffle(array){
//     let newArr = deepCloneObject(array);
//     let aux;
//     let randomPos;
//
//     for(let i = newArr.length-1; i>=0; i--){
//         randomPos = Math.floor(Math.random()*array.length);
//         aux = newArr[randomPos];
//         newArr[randomPos] = newArr[i];
//         newArr[i] = aux;
//     }
//
//     return newArr;
// }

//Option 2
function customShuffle(array) {
    let arrayCopy = deepCloneObject(array);
    let newArr = [];
    let originalLength = array.length;
    let randomPos;

    for(let i = 0; i<originalLength; i++){
        randomPos = Math.floor(Math.random()*arrayCopy.length);
        newArr.push(arrayCopy[randomPos]);
        arrayCopy.splice(randomPos,1);
    }

    return newArr;
}

let a = [1,2,3,4,5,6,7,8,9,10];

console.log(a);
console.log(customShuffle(a));



module.exports = {customShuffle};

