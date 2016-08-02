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
var reverseList = function(n) {
    
    var prev = null;
    while (n) 
         [n.next, n, prev] = [prev, n.next, n];
    
    return prev ;
};

var plusOne = function(head) {
    var reverse = reverseList(head);
    
    var current = reverse;
    while(current) {
        var newVal = current.val + 1;
        if(newVal >= 10) {
            current.val = 0;
            if(current.next === null) {
                current.next = new ListNode(1);
                break;
            }
            else
            {
                current = current.next;
            }
        }
        else {
            current.val = newVal;
            break;
        }
    }
    
    return reverseList(reverse);
}
