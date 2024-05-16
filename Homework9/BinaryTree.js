const BTNode = require('./BTNode').BTNode;
class BinaryTree{

    constructor() {
        this._root = null;
    }

    insertSorted(data, cmp){
        if(this._root === null){
            this._root = new BTNode(data,null);
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
            auxParent.right = new BTNode(data, auxParent);
        }
        else{
            auxParent.left = new BTNode(data, auxParent);
        }

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


}

let tree = new BinaryTree();

tree.insertSorted(55, (a,b)=>{
    return a-b;
});

tree.insertSorted(22, (a,b)=>{
    return a-b;
});

tree.insertSorted(65, (a,b)=>{
    return a-b;
});

tree.insertSorted(35, (a,b)=>{
    return a-b;
});

tree.insertSorted(43, (a,b)=>{
    return a-b;
});

function showData(node){
    console.log(node.data)
}
tree.traverseInOrder(showData);
console.log();
tree.traversePreOrder(showData);
console.log();
tree.traversePostOrder(showData);

