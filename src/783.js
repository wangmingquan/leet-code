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
var minDiffInBST = function (root) {
  if (root === null) return null;
  let min = Infinity;
  let pre = 0;
  const dfs = (node) => {
    if (node === null) return;
    dfs(node.left);
    if (pre === 0) {
      pre = node.val;
    } else {
      min = Math.min(min, node.val - pre);
      pre = node.val;
    }
    dfs(node.right);
  };
  dfs(root)
  return min;
};

// const test = [90, 69, null, 49, 89, null, 52];
const test = [4, 2, 6, 1, 3];
const { arrayToTree } = require('../libs/util');
console.log(minDiffInBST(arrayToTree(test)));
