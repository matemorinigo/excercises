const HashTable = require('../HashTable').HashTable;
const djb2Hash = require('../hashFunction').djb2Hash;

let ht = new HashTable(100,djb2Hash);

ht.insert("hola",912);
ht.insert("wanchope",9122018);

ht.showHashTable();
