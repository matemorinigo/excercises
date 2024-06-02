const HashTable = require('../HashTable').HashTable;
const djb2Hash = require('../hashFunction').djb2Hash;
const myHash = require('../hashFunction').hashFunction;
const strings = require('../hashFunction').strings;

let ht = new HashTable(100,myHash);
let appearances = []

for(let i=0; i<strings.length; i++){
    if(appearances[i] === undefined)
        appearances[i] = 1;
    else
        appearances[i]++;

    ht.insert(strings[i],Math.random()*100);
}

/*ht.insert("key1","value1");
ht.insert("key1","value2");*/
ht.showHashTable();
//console.log("*********************");
//
// console.log(ht.search("w7hJSGE59IHZGZTJjZE6szassyZl3KBPHFNmQ-6iO7VjQPnmQeWEilO"));
// console.log("*********************");
//
// ht.delete("w7hJSGE59IHZGZTJjZE6szassyZl3KBPHFNmQ-6iO7VjQPnmQeWEilO");
// ht.showHashTable();
