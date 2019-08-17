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
var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }
  let val;
  let newListNode = new ListNode();
  let newHead = newListNode;
  while (head) {
    if (head.val !== val) {
      newHead.next = new ListNode(head.val);
      newHead = newHead.next;
    }
    val = head.val;
    head = head.next;
  }
  return newListNode.next;
};
