const { Random, MersenneTwister19937 } = require("random-js");

const hashFunction = require('../hashFunction').hashFunction;
const djb2Hash = require('../hashFunction').djb2Hash;
const randomNormal = require('random-normal');

const random = new Random(MersenneTwister19937.autoSeed());

let strings = Array.from({ length: 100 }, () => {
    let length = Math.round(randomNormal({ mean: 50, dev: 10 }));
    length = Math.max(1, length);
    return random.string(length);
});

let appearances = [];

for(let string of strings){
    if(appearances[hashFunction(string)] === undefined)
        appearances[hashFunction(string)] = 1;
    else
        appearances[hashFunction(string)] += 1;
}

for(let i=0;i<100;i++){
    console.log(`${i} - ${appearances[i]}`);
}