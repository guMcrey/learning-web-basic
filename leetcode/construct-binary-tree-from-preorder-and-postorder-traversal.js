/**
 * 根据前序和后序遍历构造二叉树: https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-postorder-traversal/
 * 思路: https://blog.csdn.net/zhizhengguan/article/details/109949094
 *  */

function constructFromPrePost(pre, post) {
    if (!pre.length) return null;
    let root = new TreeNode([pre[0]]);
    let leftTreeLength = post.indexOf(pre[1]) + 1;
    root.left = constructFromPrePost(pre.slice(1, leftTreeLength + 1), post(0, leftTreeLength));
    root.right = constructFromPrePost(pre.slice(leftTreeLength + 1), post.slice(leftTreeLength, -1));
    return root;
}