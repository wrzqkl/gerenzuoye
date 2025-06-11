/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    // 1. 将链表转成数组
    const list = [];
    while (head) {
        list.push(head.val);
        head = head.next;
    }

    // 2. 利用 「将有序数组转换为二叉搜索树」
    const dfs = function (nums) {
        if (nums.length === 0) return null;

        // 以升序数组的中间元素作为根节点 root
        const mid = nums.length >> 1;
        const root = new TreeNode(nums[mid]);

        root.left = dfs(nums.slice(0, mid));
        root.right = dfs(nums.slice(mid + 1));

        return root;
    };

    return dfs(list);
};
