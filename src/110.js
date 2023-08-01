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
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (root === null) return true;
  let flag = true;
  var maxDepth = function (root) {
    if (root === null) {
      return 0;
    }
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    if (Math.abs(left - right) > 1) {
      flag = false;
      return;
    }
    return left > right ? left + 1 : right + 1;
  };
  maxDepth(root);
  return flag;
};
