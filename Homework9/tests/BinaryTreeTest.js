const BinaryTree = require("../BinaryTree").BinaryTree;
const Node = require('../BinaryTree').Node;
const isBST = require('../isBST').isBST;

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

console.log(isBST(tree, (a,b)=>{
    return a-b;
}))

let notBST = new BinaryTree();


notBST.root = new Node(12, null);
notBST.root.left = new Node(9, notBST.root);
notBST.root.right = new Node(4, notBST.root);

console.log(isBST(notBST, (a,b)=>{
    return a-b;
}))