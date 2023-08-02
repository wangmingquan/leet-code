/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const { arrayToTree } = require('../libs/util');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  if (root === null) return [];
  const sumMap = {};
  const traval = (node) => {
    if (node === null) return;
    const val = node.val;
    if (!sumMap[val]) {
      sumMap[val] = 1;
    } else {
      sumMap[val]++;
    }
    traval(node.left);
    traval(node.right);
  };
  traval(root);
  let max = 1;
  let res = [];
  for (let key in sumMap) {
    const item = sumMap[key];
    if (item > max) max = item;
  }
  for (let key in sumMap) {
    if (sumMap[key] === max) {
      res.push(parseInt(key));
    }
  }
  return res;
};

// test
const root = arrayToTree([1, null, 2, 2]);
console.log(findMode(root));
