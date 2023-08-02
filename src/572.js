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
var isSubtree = function (root, subRoot) {
  if (root === null || subRoot === null) {
    return false;
  }

  let subtreeflag = false;
  const subRootVal = subRoot.val;
  const compareDfs = (n1, n2) => {
    if (n1 === null && n2 === null) {
      return true;
    }
    if (n1 !== null && n2 !== null && n1.val === n2.val) {
      return compareDfs(n1.left, n2.left)
        && compareDfs(n1.right, n2.right);
    }
    return false;
  };
  const dfs = (node) => {
    if (node === null) return;
    if (node.val === subRootVal) {
      const compareFlag = compareDfs(node, subRoot);
      if (compareFlag) {
        subtreeflag = true;
      }
    }
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return subtreeflag;
};


// test
const root = [3, 4, 5, 1, 2], subRoot = [4, 1, 2];
// const root = [3, 4, 5, 1, 2, null, null, null, null, 0], subRoot = [4, 1, 2];
const { arrayToTree } = require('../libs/util');
const res = isSubtree(arrayToTree(root), arrayToTree(subRoot));
console.log(res);
