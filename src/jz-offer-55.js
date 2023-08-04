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
var maxDepth = function (root) {
  if (root === null) return 0;
  let max = 0;
  const dfs = (node, pre) => {
    if (node === null) return;
    const currentDepth = pre + 1;
    max = Math.max(max, currentDepth);
    dfs(node.left, currentDepth);
    dfs(node.right, currentDepth);
  };
  dfs(root, 0);
  return max;
};
