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
  let pre = root.val;
  let flag = true;
  let dfs = root => {
    if (root) {
      if (root.val !== pre) {
        flag = false;
        return;
      }
      dfs(root.left);
      dfs(root.right);
    }
  };
  dfs(root);
  return flag;
};
