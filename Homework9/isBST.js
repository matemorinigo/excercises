function isBST(binaryTree, cmp){
    return checkNode(binaryTree.root, cmp);
}

function checkNode(node, cmp){
    //left and right validates that the left and the right of the tree are OK with the BST property

    let left = false;
    let right = false;

    if(node === null)
        return true;

    //if one node has nothing on the left/right or the left data is less than the node data
    //means that ON THE LEFT is OK -> the same with the right
    if(node.left === null || cmp(node.data,node.left.data)>0){
        left = true;
    }

    if(node.right === null || cmp(node.data,node.right.data)<0){
        right = true;
    }

    //if both are OK, I check that the tree at the left and the right are OK.
    //if one of the recursive calls returns false, the binary tree is not bst

    if(left && right){
        return checkNode(node.left, cmp) && checkNode(node.right, cmp)
    }else{
        return false;
    }

}

module.exports = {isBST};
