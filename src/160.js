/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let [nodeA, nodeB] = [headA, headB];
  while (nodeA !== nodeB) {
    nodeA = nodeA !== null ? nodeA.next : headB;
    nodeB = nodeB !== null ? nodeB.next : headA;
  }
  return nodeA;
};
