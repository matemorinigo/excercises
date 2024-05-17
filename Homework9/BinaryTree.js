class Node{

    constructor(data, parent) {
        this._parent = parent;
        this._data = data;
        this._left = null;
        this._right = null;
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
class BinaryTree{

    constructor() {
        this._root = null;
    }

    insertSorted(data, cmp){
        if(this._root === null){
            this._root = new Node(data,null);
            return;
        }

        let auxNode = this._root;
        let auxParent = this._root.parent;
        let isOnRight = false;

        while(auxNode){
            if(cmp(auxNode.data,data)<0){
                auxParent = auxNode;
                auxNode = auxNode.right;
                isOnRight = true;
            }
            else if(cmp(auxNode.data,data)>0){
                auxParent = auxNode;
                auxNode = auxNode.left;
                isOnRight = false;
            }
            else
                throw new Error("The element is already on the binary search tree");
        }

        if(isOnRight){
            auxParent.right = new Node(data, auxParent);
        }
        else{
            auxParent.left = new Node(data, auxParent);
        }

    }

    findNodeByKey(key, cmp, node=this._root){
        if(node!==null){
            if(cmp(key, node.data)>0)
                return this.findNodeByKey(key, cmp, node.right);
            else if(cmp(key, node.data)<0)
                return this.findNodeByKey(key, cmp, node.left);
            else
                return node;
        }
        else
            throw new Error("That key is not in the tree");
            //or return null :D

    }

    traverseInOrder(action, node=this._root){
        if(node === null)
            return;

        this.traverseInOrder(action, node.left);
        action(node);
        this.traverseInOrder(action, node.right);
    }

    traversePreOrder(action, node=this._root){
        if(node === null)
            return;

        action(node);
        this.traversePreOrder(action, node.left);
        this.traversePreOrder(action, node.right);
    }

    traversePostOrder(action, node=this._root){
        if(node === null)
            return;

        this.traversePostOrder(action, node.left);
        this.traversePostOrder(action, node.right);
        action(node);
    }

    get root(){
        return this._root;
    }

    //The setter is only for testing the isBST function
    set root(value){
        this._root = value;
    }


}

module.exports = {BinaryTree, Node};




