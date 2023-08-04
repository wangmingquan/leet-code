/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let flag = true;
  const check = node => {
    if (node === null) return 0;
    if (node.left === null && node.right === null) {
      return 1;
    }
    const leftDepth = check(node.left) + 1;
    const rightDepth = check(node.right) + 1;
    if (Math.abs(leftDepth - rightDepth) > 1) {
      flag = false;
      return;
    }
    return Math.max(leftDepth, rightDepth);
  }
  check(root);
  return flag;
};

const test = [1, null, 2, null, 3];
const { arrayToTree } = require('../libs/util.js');
console.log(
  isBalanced(
    arrayToTree(
      test
    )
  )
);
