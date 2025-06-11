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
var sortedArrayToBST = function(nums) {
    return buildBST(nums, 0, nums.length - 1);
};

function buildBST(nums, left, right) {
    if (left > right) return null;
    
    // 选择中间位置作为根节点
    const mid = Math.floor((left + right) / 2);
    const root = new TreeNode(nums[mid]);
    
    // 递归构建左右子树
    root.left = buildBST(nums, left, mid - 1);
    root.right = buildBST(nums, mid + 1, right);
    
    return root;
};