/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if(nums.length==0)
    return null
  var big=Math.max(...nums)
  var root=new TreeNode(big)
  root.left=constructMaximumBinaryTree(nums.slice(0,nums.indexOf(big)))
  root.right=constructMaximumBinaryTree(nums.slice(nums.indexOf(big)+1))
  return root

};