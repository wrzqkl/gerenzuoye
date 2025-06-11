/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return null;
    // 交换当前节点的左右子节点
    [root.left, root.right] = [root.right, root.left];
    // 递归翻转左子树和右子树
    invertTree(root.left);
    invertTree(root.right);
    return root;
};