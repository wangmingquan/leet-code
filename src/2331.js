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
var evaluateTree = function (root) {
  const dfs = (node) => {
    if (node === null) return;
    if (node.left || node.right) {
      return node.val === 2
        ? dfs(node.left) || dfs(node.right)
        : dfs(node.left) && dfs(node.right)
    } else {
      return node.val === 1 ? true : false;
    }
  }
  return dfs(root);
};

// 0 false
// 1 true
// 2 or
// 3 and
