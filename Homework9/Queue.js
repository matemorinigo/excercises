const LinkedList = require("./LinkedList").LinkedList;

//This implementation is with a LinkedList, so with the different primitives of the data structure
//is pretty simple to implement a Queue
class Queue{
    constructor() {
        this._linkedList = new LinkedList();
    }

    enqueue(data){
        this._linkedList.insertAtBeginning(data);
    }

    dequeue(){
        return this._linkedList.removeFromEnd();
    }

    peek(){
        return this._linkedList.peekFistNode();
    }

    isEmpty(){
        return this._linkedList.isEmpty();
    }

}

module.exports = {Queue}