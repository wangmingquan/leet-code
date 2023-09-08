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
var recoverTree = function (root) {
  let stack = [];
  let firstErrorNodeVal;
  const dfs = (node) => {
    if (node === null) return;
    dfs(node.left);
    stack.push(node);
    dfs(node.right);
  }
  dfs(root);
  let newStack = [...stack];
  newStack.sort((a, b) => a.val - b.val);
  for (let i = 0, l = stack.length; i < l; i++) {
    // console.log(stack[i].val, newStack[i].val);
    if (stack[i] !== newStack[i]) {
      firstErrorNodeVal = stack[i].val;
      stack[i].val = newStack[i].val;
      newStack[i].val = firstErrorNodeVal;
      break;
    }
  }
  return root;
};

const test = [1, 3, null, null, 2];
// const test = [2, 1, 3];
// const test = [5, 1, 4, null, null, 3, 6];
// const test = [32, 26, 47, 19, null, null, 56, null, 27];
const { arrayToTree } = require('../libs/util');
console.log(
  recoverTree(
    arrayToTree(
      test
    )
  )
)
