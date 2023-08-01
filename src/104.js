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

// 解法 1
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return left > right ? left + 1 : right + 1;
};


// 解法 2
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }
  let layer = 0;
  const traval = (nodes) => {
    if (nodes.length === 0) return;
    const _nodes = [];
    layer++;
    for (let i = 0, l = nodes.length; i < l; i++) {
      const node = nodes[i];
      if (node.left) _nodes.push(node.left);
      if (node.right) _nodes.push(node.right);
    }
    traval(_nodes);
  }
  traval([root])
  return layer;
};
