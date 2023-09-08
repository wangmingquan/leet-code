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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let ans = [];
  const dfs = (root, path, sum) => {
    if (root === null) return;
    const val = root.val;
    const newPath = (path.concat([val]));
    const newSum = sum + val;
    if (!root.left && !root.right) {
      if (newSum === targetSum) {
        ans.push(newPath);
      }
    }
    dfs(root.left, newPath, newSum);
    dfs(root.right, newPath, newSum);
  };
  dfs(root, [], 0);
  return ans;
};

const {
  arrayToTree
} = require('../libs/util');
const root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], targetSum = 22;
// 输出：[[5, 4, 11, 2], [5, 8, 4, 5]]
console.log(
  pathSum(
    arrayToTree(
      root
    ),
    targetSum
  )
);
