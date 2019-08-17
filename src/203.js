/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head && head.val === val) {
    return removeElements(head.next, val);
  }
  let p = head;
  while (p) {
    if (p.next && p.next.val === val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return head;
};
