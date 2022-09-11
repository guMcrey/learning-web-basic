// 二叉树门路总和是否存在等于某个值

function findNodeSum(root, targetValue) {
    if (!root) {
        return false;
    }
    let flag = false;
    const recursion = (root, value) => {
        if (!root.left && !root.right && value === targetValue) {
            flag = true;
        }
        if (root.left) {
            return recursion(root.left, value + root.left.value)
        }
        if (root.right) {
            return recursion(root.right, value + root.right.value)
        }
    }
    recursion(root, root.value)
}