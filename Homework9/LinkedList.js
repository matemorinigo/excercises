class Node {

    constructor(data) {
        this._data = data;
        this._next = null;
    }


    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    get next(){
        return this._next;
    }

    set next(node){
        this._next = node;
    }
}

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

        //auxNode stores the first node and, because of that, the previous node is null
        let auxNode = this._firstNode;
        let prevNode = null;

        //Then I move along the nodes of the linked list, until auxNode is the last node
        while(auxNode.next !== null){
            prevNode = auxNode;
            auxNode = auxNode.next;
        }

        //Because I stored the previous node, I can change the reference to the next node
        //(that was auxNode) and change it to null
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

    traverseLinkedList(action){
        let auxNode = this._firstNode;

        while(auxNode !== null){
            action(auxNode.data);
            auxNode = auxNode.next;
        }

    }
}

module.exports = {LinkedList}


