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

var isSymmetric = function (root) {
  const compare = (left, right) => {
    if (left === null && right === null) return true;
    if (left !== null && right === null) return false;
    if (left === null && right !== null) return false;
    if (left.val !== right.val) return false;
    const outCompare = compare(left.left, right.right);
    const inCompare = compare(left.right, right.left);
    return outCompare && inCompare;
  };

  if (root === null) { return true; }
  return compare(root.left, root.right);
};
