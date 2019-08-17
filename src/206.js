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
var reverseList = function (head) {
  let listNode = null;
  while (head) {
    let _listNode = new ListNode(head.val);
    _listNode.next = listNode;
    listNode = _listNode;
    head = head.next;
  }
  return listNode;
};
