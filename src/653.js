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
 * @param {number} k
 * @return {boolean}
 */

// 方法一
var findTarget = function (root, k) {
  let flag = false;
  const dfsVal = (node, current, remaining) => {
    if (node === null) return;
    if (node !== current && node.val === remaining) {
      flag = true;
    }

    dfsVal(node.left, current, remaining);
    dfsVal(node.right, current, remaining);
  }
  const dfs = (current) => {
    if (current === null) return;
    let remaining = k - current.val;
    dfsVal(root, current, remaining);
    if (flag) return;
    dfs(current.left);
    dfs(current.right);
  };
  dfs(root);
  return flag;
};

// 方法二
var findTarget = function (root, k) {
  let vals = [];
  const dfs = (current) => {
    if (current === null) return;
    dfs(current.left);
    vals.push(current.val);
    dfs(current.right);
  };
  dfs(root);

  for (let i = 0, l = vals.length; i < l; i++) {
    let remaining = k - vals[i];
    for (j = i + 1; j < l; j++) {
      if (vals[j] === remaining) {
        return true;
      }
    }
  }
  return false;
}

const { arrayToTree } = require('../libs/util');
// const test = [5, 3, 6, 2, 4, null, 7];
const test = [2, null, 3];

console.log(findTarget(arrayToTree(test), 6));
// [2, 1, 3]
// 4
