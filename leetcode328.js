/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    
    if(head === null || head.next === null) return head;
    var odd = head;
    var even = head.next;
    while(even.next !== null) {
        var temp = odd.next;
        odd.next = even.next;
        even.next = even.next.next;
        odd.next.next = temp;
        
        odd = odd.next;
        
        if(even.next === null) {
            break;
        }
        else {
            even = even.next;
        }
    }
    
    return head;
    
};
