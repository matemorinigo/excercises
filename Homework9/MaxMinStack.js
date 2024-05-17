const LinkedList = require('./LinkedList').LinkedList;

class MaxMinStack{
    constructor(cmp) {
        this._stack = new LinkedList();
        this._max = null;
        this._min = null;
        this._cmp = cmp;
    }

    push(data){
        //to get a O(1) complexity when I have to getMax or getMin, I update both values when I insert something

        if(this._max === null && this._min === null){
            this._max = data;
            this._min = data;
        }
        if(this._cmp(data, this._max)>0)
            this._max = data;
        if(this._cmp(data, this._min)<0)
            this._min = data;

        this._stack.insertAtBeginning(data);
    }

    pop(){
        //When I pop something out of the stack, that data could be the max or min of the stack
        let data = this._stack.removeFromBeginning();

        //so with updateMaxMin() I iterate the linkedList to update the values
        this.#updateMaxMin();

        return data;
    }

    #updateMaxMin(){
        //and thats why I use a linked list and not a stack object, because with the linked list is easier to
        //traverse it in order to find the new max/min

        let partialMax = this._stack.peekFistNode();
        let partialMin = partialMax;
        this._stack.traverseLinkedList((data)=>{
            if(this._cmp(data, partialMax)>0)
                partialMax = data;
            else if(this._cmp(data, partialMin)<0)
                partialMin = data;
        })

        this._max = partialMax;
        this._min = partialMin;
    }

    get max(){
        return this._max;
    }

    get min(){
        return this._min;
    }

}

module.exports = {MaxMinStack};

