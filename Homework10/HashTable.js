const LinkedList = require('../Homework9/LinkedList').LinkedList;
class HashTable{
    //The hash table handles collisions by a linked list
    //With the other techniques, if you have the table full of keys with the same hash, you cant take advantage 
    //of the hash table and the cost of searching is O(n)
    //With linked list, the table cant be full of keys with the same hash and if you search for a key that haven't
    //collision the cost is O(1)
    constructor(size, hashFunction) {
        this._hashFunction = hashFunction;
        this._table = [];
        this._size = size;
    }

    _getHash(key){
        return this._hashFunction(key)%this._size;
    }

    /*_getHash(key){
        return this._hashFunction(key,this._size);
    }*/

    insert(key,value){
        let index = this._getHash(key);
        if(this._table[index] === undefined)
            this._table[index] = {linkedList: new LinkedList()};

        this._table[index].linkedList.insertAtBeginning({key:key, value:value});

    }

    search(key){
        let index = this._getHash(key);
        if(this._table[index] === undefined)
            throw new Error("There is no object with that key")

        let data = null;
        this._table[index].linkedList.traverseLinkedList(pair=>{
            if(pair.key.localeCompare(key)===0){
                data = pair;
            }
        });

        return data;
    }

    delete(key){
        let index = this._getHash(key);
        if(this._table[index] === undefined)
            throw new Error("There is no object with that key")

        let data = this._table[index].linkedList.removeNodeByKey(key,(pair,keyArg)=>{
            return pair.key.localeCompare(keyArg);
        });

        return data;
    }

    showHashTable(){
        for(let i in this._table){
            console.log("-----------------------");
            console.log(i);
            this._table[i].linkedList.showLinkedList();
        }
    }


}

module.exports = {HashTable};