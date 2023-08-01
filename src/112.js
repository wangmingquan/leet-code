/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let flag = false;
  const traval = (preSum, node) => {
    if (node === null) return;
    const newSum = preSum + node.val;
    if (newSum === targetSum && node.left === null && node.right === null) {
      flag = true;
      return;
    }
    traval(newSum, node.left);
    traval(newSum, node.right);
  }
  traval(0, root)
  return flag;
};
