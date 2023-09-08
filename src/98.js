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
var isValidBST = function (root) {
  let flag = true;
  const dfs = node => {
    if (node === null) return [];
    const leftVals = dfs(node.left);
    const val = node.val;
    const rightVals = dfs(node.right);

    if (val <= Math.max(...leftVals) || val >= Math.min(...rightVals)) {
      flag = false;
    }
    // console.log({ flag, val, leftVals, rightVals });
    return [val, ...leftVals, ...rightVals];
  };
  dfs(root);
  return flag;
};
// 解法 2
var isValidBST = function (root) {
  let max = -Infinity;
  let flag = true;
  const dfs = node => {
    if (node === null) return;
    dfs(node.left);
    if (max >= node.val) {
      flag = false;
      return;
    }
    max = node.val
    dfs(node.right);
  };
  dfs(root);
  return flag;
};

// const test = [5, 4, 6, null, null, 3, 7];
// const test = [2, 1, 3];
const test = [5, 1, 4, null, null, 3, 6];
// const test = [32, 26, 47, 19, null, null, 56, null, 27];
const { arrayToTree } = require('../libs/util');
console.log(
  isValidBST(
    arrayToTree(
      test
    )
  )
)
