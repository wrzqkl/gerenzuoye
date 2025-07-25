/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let current = head;
    let count = 0;
    
    while (current !== null && count < k) {
        current = current.next;
        count++;
    }
    
    if (count === k) {
        current = reverseKGroup(current, k); 
        while (count > 0) {
            let temp = head.next;
            head.next = current;
            current = head;
            head = temp;
            count--;
        }
        head = current;
    }
    
    return head;
};