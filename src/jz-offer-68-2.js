/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let commonAncestor = null;
  const dfs = node => {
    if (node === null) return;
    let includeP = false;
    let includeQ = false;

    if (node === p) includeP = true;
    if (node === q) includeQ = true;
    const leftStatus = dfs(node.left);
    const rightStatus = dfs(node.right);

    includeP = includeP || leftStatus?.includeP
      || rightStatus?.includeP
      || false;
    includeQ = includeQ || leftStatus?.includeQ
      || rightStatus?.includeQ
      || false;

    if (includeP && includeQ) {
      commonAncestor = node;
      return;
    }
    return {
      includeP,
      includeQ
    }
  }
  dfs(root);
  return commonAncestor;
};

const test = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
const { arrayToTree } = require('../libs/util');
const root = arrayToTree(test);
const p = root.left;
const q = root.right;
console.log(lowestCommonAncestor(root, p, q));
