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
var sumRootToLeaf = function(root) {
  let sum = 0;
  const vals = [];
  const dfs = (node, pre) => {
    if (node === null) return;
    let newPre = pre + node.val;
    if (!node.left && !node.right) {
        vals.push(newPre);
        return;
    }
    dfs(node.left, newPre);
    dfs(node.right, newPre);
  }
  dfs(root, '');
  vals.map(item => {
    sum += parseInt(item, 2);
  });
  return sum;
};
