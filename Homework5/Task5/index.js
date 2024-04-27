const customFilterUnique = require('../Task1/customFilterUnique').customFilterUnique;
const measureArrayPerformance = require('./measureArrayPerformance').measureArrayPerformance;

let arr = [1,2,3,4,5,6,7]
console.log(measureArrayPerformance(arr,customFilterUnique,(x)=>x>5));

const startTime2 = performance.now();
arr.filter((x)=>x>5);
const endTime2 = performance.now();

console.log(endTime2-startTime2); //miliseconds