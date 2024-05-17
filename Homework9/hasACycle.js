//From my point of view, this function should be a method of LinkedList
function hasACycle(linkedList){
    //Initialize two "pointers", slow would move forward 1 node, and fast 2 nodes
    let slow = linkedList.firstNode;
    let fast = linkedList.firstNode;

    //if the next node of one of the pointers is null, that means the linked list has no cycles
    while(slow.next !== null && fast.next !== null && fast.next.next !== null){
        slow = slow.next;
        fast = fast.next.next

        //but if both "pointers" are in the same node, that means the linked list has a cycle
        if(slow === fast)
            return true;
    }

    return false;
}