const LinkedList = require('../LinkedList').LinkedList;

let list = new LinkedList();

list.insertAtEnd("b");
list.insertAtBeginning("a");
list.insertAtEnd("f");
list.showLinkedList();
console.log();

console.log(list.removeFromEnd());
console.log();

list.showLinkedList();
console.log();

console.log(list.removeFromBeginning());
console.log();

list.showLinkedList();

console.log(list.findNodeByKey("b", (value,key)=>{
    if(value === key)
        return 0;
    return -1;
}))