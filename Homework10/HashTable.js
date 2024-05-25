const LinkedList = require('../Homework9/LinkedList').LinkedList;
class HashTable{
    constructor(size, hashFunction) {
        this._hashFunction = hashFunction;
        this._table = [];
        this._size = size;
    }

    /*_getHash(key){
        return this._hashFunction(key)%this._size;
    }*/

    _getHash(key){
        return this._hashFunction(key,this._size);
    }

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

        let data = this._table[index].linkedList.removeNodeByKey(key,(key1,pair)=>{
            return key1.localeCompare(pair.key);
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