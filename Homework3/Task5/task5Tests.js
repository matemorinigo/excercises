const {lazyMap} = require("./lazyMap");
const {fibonacciGenerator} = require("./fibonacciGenerator");

let arr = [2,5,6];
let dup = function (x){
    return x*2;
};
lazy = lazyMap(arr,dup);

console.log(lazy());
console.log(lazy());
console.log(lazy());

console.log(lazy());

let fibo = fibonacciGenerator();

console.log(fibo());
console.log(fibo());
console.log(fibo());
console.log(fibo());
console.log(fibo());
console.log(fibo());
console.log(fibo());
console.log(fibo());
console.log(fibo());
console.log(fibo());
console.log(fibo());
console.log(fibo());
console.log(fibo());
console.log(fibo());
console.log(fibo());
console.log(fibo());


