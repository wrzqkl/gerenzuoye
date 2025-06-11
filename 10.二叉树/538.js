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
var convertBST = function(root) {
    let s = 0;
    function dfs(node) {
        if (node === null) {
            return;
        }
        dfs(node.right); // 递归右子树
        s += node.val;
        node.val = s; // 此时 s 就是 >= node.val 的所有数之和
        dfs(node.left); // 递归左子树
    }
    dfs(root);
    return root;

};