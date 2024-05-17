const LinkedList = require('./LinkedList').LinkedList;

class MaxMinStack{
    constructor(cmp) {
        this._stack = new LinkedList();
        this._max = null;
        this._min = null;
        this._cmp = cmp;
    }

    push(data){
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
        let data = this._stack.removeFromBeginning();

        this.#updateMaxMin();

        return data;
    }

    #updateMaxMin(){
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

