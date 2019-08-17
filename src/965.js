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
var isUnivalTree = function (root) {
  let set = new Set();
  let dfs = root => {
    if (root) {
      set.add(root.val);
      dfs(root.left);
      dfs(root.right);
    }
  };
  dfs(root);
  return set.size === 1;
};
