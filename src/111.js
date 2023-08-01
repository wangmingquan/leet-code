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
var minDepth = function (root) {
  if (root === null) return 0;
  let layers = 1;

  const traval = (nodes) => {
    const _nodes = [];
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (!node.left && !node.right) {
        return;
      }
      if (node.left) _nodes.push(node.left);
      if (node.right) _nodes.push(node.right);
    }
    traval(_nodes);
    layers++;
  }
  traval([root]);
  return layers;
};
