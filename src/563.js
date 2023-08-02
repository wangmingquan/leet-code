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
var findTilt = function (root) {
  let sum = 0;

  const dfs = (node) => {
    if (node === null) return 0;

    // 算出自己和子节点的和
    let sumLeft = dfs(node.left);
    let sumRight = dfs(node.right);
    let sumSelf = sumLeft + sumRight + node.val;

    // 算出自己得坡度,并累加
    if (node.left !== null || node.right !== null) {
      sum += Math.abs(sumLeft - sumRight);
    }
    return sumSelf
  };
  dfs(root);

  return sum;
};


// test
const { arrayToTree } = require('../libs/util');
const root = arrayToTree([4, 2, 9, 3, 5, null, 7]);
// const root = arrayToTree([1, 2, 3, 4, 5]);
console.log(findTilt(root));
