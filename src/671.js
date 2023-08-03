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
var findSecondMinimumValue = function (root) {
  const vals = new Set();
  const dfs = (nodes) => {
    if (nodes.length === 0) return;
    const _nodes = [];
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node !== null) {
        vals.add(node.val);
        _nodes.push(node.left);
        _nodes.push(node.right);
      }
    }
    // if (vals.size >= 2) {
    //   return;
    // }
    dfs(_nodes);
  };
  dfs([root]);

  if (vals.size >= 2) {
    const newVals = [...vals];
    newVals.sort();
    return newVals[1];
  } else {
    return -1;
  }
};

const test = [1, 1, 3, 1, 1, 3, 4, 3, 1, 1, 1, 3, 8, 4, 8, 3, 3, 1, 6, 2, 1]
const { arrayToTree } = require('../libs/util');
console.log(findSecondMinimumValue(arrayToTree(test)));
