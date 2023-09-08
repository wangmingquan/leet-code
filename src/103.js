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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let direction = 'left';
  let ans = [];
  const dfs = (nodes) => {
    if (nodes.length === 0) return;
    let newNodes = [];
    let vals = [];
    for (let i = 0; i < nodes.length; i++) {
      const item = nodes[i];
      if (!item) continue;
      if (direction === 'left') {
        vals.push(item.val);
      } else {
        vals.unshift(item.val);
      }
      if (item.left) newNodes.push(item.left);
      if (item.right) newNodes.push(item.right);
    }
    ans.push(vals);
    direction = direction === 'left' ? 'right' : 'left';
    dfs(newNodes);
  };
  dfs([root]);
  return ans;
};

const test = [3, 9, 20, null, null, 15, 7];
// const test = [2, 1, 3];
// const test = [5, 1, 4, null, null, 3, 6];
// const test = [32, 26, 47, 19, null, null, 56, null, 27];
const { arrayToTree } = require('../libs/util');
console.log(
  zigzagLevelOrder(
    arrayToTree(
      test
    )
  )
)
