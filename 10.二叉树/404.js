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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let number = 0;
  const sum = (root) => {
    //边界条件
    if (root === null) {
      return;
    }
    //是左叶子节点
    if (root.left && !root.left.left && !root.left.right) {
      number = number + root.left.val;
    }
    //不是左叶子节点
      sum(root.left);
      sum(root.right);
  };
  sum(root);
  return number;
};