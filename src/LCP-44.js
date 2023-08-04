/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var numColor = function (root) {
  let colors = new Set();
  const dfs = node => {
    if (node === null) return;
    colors.add(node.val);
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return colors.size;
};
