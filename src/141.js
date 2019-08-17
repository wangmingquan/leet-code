/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let [p1, p2] = [head, head];
  p1 = p1 ? p1.next : null;
  p2 = p2 ? p2.next : null;
  p1 = p1 ? p1.next : null;
  if (!p1 || !p2) {
    return false;
  }
  while (p1 && p2) {
    if (p1 === p2) {
      return true;
    }
    p1 = p1.next;
    p2 = p2.next;
    p1 = p1 ? p1.next : null;
  }
  return false;
};
