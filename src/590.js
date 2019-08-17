/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  let res = [];
  function traverse (node, res) {
    if (!root) return;
    for (let item of node.children) {
      traverse(item, res);
    }
    res.push(node.val);
  }
  traverse(root, res);
  return res;
};
