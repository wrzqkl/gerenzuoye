/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;
    
    const map = new Map();
    let current = head;
    
    while (current) {
        map.set(current, new Node(current.val, null, null));
        current = current.next;
    }
    
    current = head;
    
    while (current) {
        map.get(current).next = map.get(current.next) || null;
        map.get(current).random = map.get(current.random) || null;
        current = current.next;
    }
    
    return map.get(head);
};