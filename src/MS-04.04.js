/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let flag = true;
  const dfs = (node) => {
    if (node === null) return 0;
    const leftPath = dfs(node.left);
    const rightPath = dfs(node.right);
    if (Math.abs(leftPath - rightPath) > 1) {
      flag = false;
      return;
    }
    return Math.max(leftPath, rightPath) + 1;
  }
  dfs(root);
  return flag;
};

