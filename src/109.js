
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

var sortedListToBST = function (head) {
  if (!head) return null;
  let pos = head;
  const arr = [];
  while (pos) {
    arr.push(pos.val);
    pos = pos.next;
  }
  const generator = (arr) => {
    if (arr.length === 0) return null;
    const length = arr.length;
    const index = Math.floor(length / 2);
    const val = arr[index];
    const leftVals = arr.slice(0, index);
    const rightVals = arr.slice(index + 1, length);
    return new TreeNode(
      val,
      generator(leftVals),
      generator(rightVals)
    )
  }
  return generator(arr);
};

// 方法 2，一快一慢两个指针同时跑，快指针跑完就找到了中间节点

const head = [-10, -3, 0, 5, 9];
const {
  arrayToListNode
} = require('../libs/util');

console.log(
  sortedListToBST(
    arrayToListNode(
      head
    )
  )
)
