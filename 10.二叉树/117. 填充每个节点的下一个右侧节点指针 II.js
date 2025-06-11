/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if (!root) return null;
    
    let head = root; // 当前层的第一个节点
    
    while (head) {
        let dummy = new Node(0); // 虚拟节点用于连接下一层
        let current = dummy;
        
        // 遍历当前层，连接下一层节点
        while (head) {
            if (head.left) {
                current.next = head.left;
                current = current.next;
            }
            if (head.right) {
                current.next = head.right;
                current = current.next;
            }
            head = head.next;
        }
        
        head = dummy.next; // 移动到下一层
    }
    
    return root;
};