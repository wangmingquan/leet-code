/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carray = 0;
  let result = new ListNode();
  let temp = new ListNode();
  result.next = temp;
  let [v1, v2] = [l1, l2];
  while (v1 || v2) {
    let sum = (v1 ? v1.val : 0) + (v2 ? v2.val : 0) + carray;
    let next = null;
    
    carray = sum > 9 ? 1 : 0;
    temp.val = sum - carray * 10;
    
    if (v1 && v1.next || v2 && v2.next) {
      next = new ListNode();
    } else if (carray) {
      next = new ListNode(1);
    }
    temp.next = next;
    
    temp = temp.next ? temp.next : null;
    v1 = v1 && v1.next ? v1.next : null;
    v2 = v2 && v2.next ? v2.next : null;
  }
  return result.next; 
};
