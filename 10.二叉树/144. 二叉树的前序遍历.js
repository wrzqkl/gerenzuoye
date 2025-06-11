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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const result = [];
    
    function traverse(node) {
        if (!node) return;
        result.push(node.val);  // 访问根节点
        traverse(node.left);    // 遍历左子树
        traverse(node.right);   // 遍历右子树
    }
    
    traverse(root);
    return result;
};