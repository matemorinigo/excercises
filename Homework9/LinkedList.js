const Node = require('./LLNode').Node;
class LinkedList{
    constructor() {
        this._firstNode = null;
    }

    isEmpty(){
        return this._firstNode === null;
    }

    insertAtBeginning(data){
        let newNode = new Node(data);
        newNode.next = this._firstNode;
        this._firstNode = newNode;
    }

    insertAtEnd(data){
        let newNode = new Node(data);

        if(this._firstNode === null){
            this._firstNode = newNode;
            return;
        }

        let auxNode = this._firstNode;

        while(auxNode.next !== null){
            auxNode = this._firstNode.next;
        }

        auxNode.next = newNode;
    }

    removeFromBeginning(){
        if(this.isEmpty())
            throw new Error("The linked list is empty");

        let data = this._firstNode.data;

        this._firstNode = this._firstNode.next;

        return data;
    }

    removeFromEnd(){
        if(this.isEmpty())
            throw new Error("The linked list is empty");

        let data;
        let auxNode = this._firstNode;
        let prevNode = null;

        while(auxNode.next !== null){
            prevNode = auxNode;
            auxNode = auxNode.next;
        }

        data = auxNode.data;
        prevNode.next = null;
        return data;
    }

    peekFistNode(){
        if(this.isEmpty())
            throw new Error("The linked list is empty");

        return this._firstNode.data;
    }

    findNodeByKey(key, cmp){
        if(this.isEmpty())
            throw new Error("The linked list is empty");

        let auxNode = this._firstNode;

        while(auxNode !== null){
            if(cmp(auxNode.data,key) === 0){
                return auxNode;
            }
            auxNode = auxNode.next;
        }

        throw new Error("There is no node with that key");
    }

    showLinkedList(){
        let auxNode = this._firstNode;

        console.log('[');
        while(auxNode !== null){
            console.log(auxNode.data);
            auxNode = auxNode.next;
        }
        console.log(']');
    }
}

module.exports = {LinkedList}


