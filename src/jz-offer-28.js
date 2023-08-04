/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var isSymmetric = function (root) {
  if (root === null) return true;
  let flag = true;
  const { left, right } = root;
  const checkIsSymmetric = (left, right) => {
    if (left === null && right === null) return;
    if (left === null && right !== null
      || left !== null &&  right === null) {
      flag = false;
      return;
    }
    if (left.val !== right.val) {
      flag = false;
      return;
    }
    checkIsSymmetric(left.left, right.right);
    checkIsSymmetric(left.right, right.left);
  };
  checkIsSymmetric(left, right);
  return flag;
};
