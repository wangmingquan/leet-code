/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

var getDecimalValue = function (head) {
  let vals = [];
  let rel = 0;
  while (head) {
    vals.push(head.val);
    head = head.next;
  }
  rel = vals.join('');
  return parseInt(rel, 2);
};

