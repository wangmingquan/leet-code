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
var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true;
  }
  let tail = head;
  while (tail.next) {
    tail.next.prev = tail;
    tail = tail.next;
  }
  while (head) {
    if (head.val !== tail.val) {
      return false;
    }
    head = head.next;
    tail = tail.prev;
  }
  return true;
};
