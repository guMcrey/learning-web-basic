/**
 * 路径总和: https://leetcode.cn/problems/path-sum
 * 描述: 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false
 * 思路: 递归遍历二叉树, 将各层节点的和保存, 并比较
 */

function hasPathSum(root, targetSum) {
    if (!root) {
        return false;
    }
    let flag = false;
    function recursion(root, sum) {
        if (!root.left && !root.right && sum === targetSum) {
            flag = true;
        }
        if (root.left) {
            recursion(root.left, sum + root.left.val)
        }
        if (root.right) {
            recursion(root.right, sum + root.right.val)
        }
    }
    recursion(root, root.val)
    return flag;
}

console.log(hasPathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22));   // true