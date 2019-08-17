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
var middleNode = function (head) {
  // 计算长度
  let len = 0;
  let temp = head;
  while (temp) {
    len++;
    temp = temp.next;
  }

  // 计算中位数
  let middle = 0;
  if (len % 2 === 1) {
    middle = (len - 1) / 2;
  } else {
    middle = len / 2;
  }

  // 获取中间节点
  let i = 0;
  let middleNode = head;
  while (i < middle) {
    i++;
    middleNode = middleNode.next;
  }
  return middleNode;
};
