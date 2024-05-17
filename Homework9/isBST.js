function isBST(binaryTree, cmp){
    return checkNode(binaryTree.root, cmp);
}

function checkNode(node, cmp){
    let left = false;
    let right = false;

    if(node === null)
        return true;

    if(node.left === null || cmp(node.data,node.left.data)>0){
        left = true;
    }

    if(node.right === null || cmp(node.data,node.right.data)<0){
        right = true;
    }

    if(left && right){
        return checkNode(node.left, cmp) && checkNode(node.right, cmp)
    }else{
        return false;
    }

}

module.exports = {isBST};
