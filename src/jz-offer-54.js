/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let index = 0;
  let ans = 0;
  const dfs = node => {
    if (node === null) return;
    dfs(node.right);
    index++;
    if (index === k) {
      ans = node.val;
      return;
    }
    dfs(node.left);
  };
  dfs(root);
  return ans;
};

const { arrayToTree } = require('../libs/util');
const test = [3, 1, 4, null, 2];
console.log(
  kthLargest(
    arrayToTree(
      test
    ),
    1
  )
);
