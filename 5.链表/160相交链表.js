/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    
    let lenA = 0, lenB = 0;
    let currA = headA, currB = headB;
    
    while (currA) {
        lenA++;
        currA = currA.next;
    }
    
    while (currB) {
        lenB++;
        currB = currB.next;
    }
    
    currA = headA;
    currB = headB;
    
    if (lenA > lenB) {
        for (let i = 0; i < lenA - lenB; i++) {
            currA = currA.next;
        }
    } else {
        for (let i = 0; i < lenB - lenA; i++) {
            currB = currB.next;
        }
    }
    
    while (currA && currB) {
        if (currA === currB) {
            return currA;
        }
        currA = currA.next;
        currB = currB.next;
    }
    
    return null;
};