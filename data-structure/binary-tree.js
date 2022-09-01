// https://zhuanlan.zhihu.com/p/109720018

/**
 * 树: 是一种非线性的数据结构, 以分层的方式来存储数据, 树被用来存储有层级关系的数据
 * 二叉树: 二叉树是一种具有层级特性的数据结构, 一棵树包含多个节点, 节点自身含有一个属性, 就是它所代表的数值, 节点与节点间有对应关系, 一种叫做父子关系, 另一种叫做兄弟关系
 * 排序二叉树: 左节点的数值小于根节点, 右节点数值都大于根节点 
 */

// 实现排序二叉树
function binaryTree() {
    // 创建一个节点
    const Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    // 创建一个根节点
    let root = null;
    const insertNode = function (node, newNode) {
        if (node.key > newNode.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }
    // 创建一个函数用来插入节点
    this.insert = function (key) {
        var newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
            console.log(root);
        }
    }
}

var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
var binaryTree = new binaryTree();
nodes.forEach(function (key) {
    binaryTree.insert(key)
})




