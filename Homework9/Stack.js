const LinkedList = require('./LinkedList').LinkedList;
class Stack{
    constructor() {
        this._linkedList = new LinkedList();
    }

    push(data){
        this._linkedList.insertAtBeginning(data);
    }

    pop(){
        return this._linkedList.removeFromBeginning();
    }

    peek(){
        return this._linkedList.peekFistNode();
    }
}