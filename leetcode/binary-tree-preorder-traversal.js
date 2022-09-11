// 二叉树前序遍历

const preTraversal = function (root) {
    if (!root) return [];
    let result = [];
    function recursion(root) {
        if (!root) {
            return null;
        }
        result.push(root.value);
        recursion(root.left);
        recursion(root.right);
    }
    recursion(root)
    return result;
}