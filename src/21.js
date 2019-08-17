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
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let listNode = new ListNode();

  let arr = [];
  while (l1 || l2) {
    if (l1.val > l2.val) {
    }
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  let next = listNode;

  for (var i = 0, l = arr.length; i < l; i++) {
    next.next = new ListNode(arr[i]);
    next = next.next;
  }
  return listNode.next;
};
