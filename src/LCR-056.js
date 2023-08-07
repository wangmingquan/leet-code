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
var findTarget = function (root, k) {
  let flag = false;
  const vals = new Set();
  const dfs = node => {
    if (!node) return;
    const val = node.val;
    if (vals.has(k - val)) {
      flag = true;
      return;
    }
    vals.add(val);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return flag;
};
