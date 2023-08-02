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
var diameterOfBinaryTree = function (root) {
  let max = 0;
  const dfs = (node) => {
    if (node === null) {
      return 0;
    }
    let leftMaxD = dfs(node.left);
    let rightMaxD = dfs(node.right);
    let subDistance = leftMaxD + rightMaxD;

    if (subDistance > max) {
      max = subDistance;
    }

    return Math.max(leftMaxD, rightMaxD) + 1;
  };
  dfs(root)
  return max;
};

// test
const { arrayToTree } = require('../libs/util');
const root = arrayToTree([4, -7, -3, null, null, -9, -3, 9, -7, -4, null, 6, null, -6, -6, null, null, 0, 6, 5, null, 9, null, null, -1, -4, null, null, null, -2]);
// const root = arrayToTree([1, 2, 3, 4, 5]);
console.log(diameterOfBinaryTree(root));
