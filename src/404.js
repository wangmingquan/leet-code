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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let leftSum = 0;
  const traval = (node, direction) => {
    if (node === null) return;
    if (direction === 'left' && node.left === null && node.right === null) {
      leftSum += node.val;
      return;
    }
    traval(node.left, 'left');
    traval(node.right);
  };
  traval(root);
  return leftSum;
};
