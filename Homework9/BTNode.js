class BTNode{

    constructor(data, left, right , parent) {
        this._parent = parent;
        this._data = data;
        this._left = left;
        this._right = right;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    get left() {
        return this._left;
    }

    set left(value) {
        this._left = value;
    }

    get right() {
        return this._right;
    }

    set right(value) {
        this._right = value;
    }


    get parent() {
        return this._parent;
    }

    set parent(value) {
        this._parent = value;
    }
}

module.exports = {BTNode};