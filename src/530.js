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
var getMinimumDifference = function (root) {
  let vals = [];
  let min = Infinity;
  const dfs = (node) => {
    if (node === null) return;
    dfs(node.left);
    vals.push(node.val);
    dfs(node.right)
  };
  dfs(root);
  for (let i = 1, l = vals.length; i < l; i++) {
    let diff = vals[i] - vals[i - 1];
    min = Math.min(min, diff);
  }
  return min;
};

// test
const { arrayToTree } = require('../libs/util');
const root = arrayToTree([236, 104, 701, null, 227, null, 911]);
console.log(getMinimumDifference(root));
