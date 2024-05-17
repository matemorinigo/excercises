const MaxMinStack = require("../MaxMinStack").MaxMinStack;

let maxMin = new MaxMinStack((a,b)=>{
    return a-b;
});

maxMin.push(912);
maxMin.push(88);

console.log(maxMin.max);
console.log(maxMin.min);

maxMin.push(1111);
maxMin.push(4);

console.log(maxMin.max);
console.log(maxMin.min);

console.log(maxMin.pop())

console.log(maxMin.max);
console.log(maxMin.min);