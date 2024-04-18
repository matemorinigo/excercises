const {createCounter} = require("./createCounter");
const {repeatFunction} = require("./repeatFunction");


const a = createCounter();

console.log(a());
console.log(a());
console.log(a());


function printf(){
    console.log("printf");
}

let b = repeatFunction(printf, -1);
b();