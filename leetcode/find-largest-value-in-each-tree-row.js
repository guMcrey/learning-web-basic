// 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。

function largestValue(root) {
    if (!root) {
        return [];
    }
    let temp = {};
    let result = [];
    root.level = 1;

    function recursion(root) {
        if (!root) {
            return null;
        }
        temp[root.level] = root.level ? [...temp[root.level], root.val] : [root.val];
        if (root.left) {
            root.left.level += 1;
            recursion(root.left);
        }
        if (root.right) {
            root.right.level += 1;
            recursion(root.right);
        }
    }
    recursion(root);
    for (const i in temp) {
        result.push(Math.max(...temp[i]))
    }
    return result;
}