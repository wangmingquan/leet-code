/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  let ct = null;
  const dfs = (o, c) => {
    if (o === null) return;
    if (o === target) {
      ct = c;
      return;
    }
    dfs(o.left, c.left);
    dfs(o.right, c.right);
  }
  dfs(original, cloned);
  return ct;
};
