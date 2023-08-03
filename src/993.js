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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  if (root === null) return false;
  let flag = false;
  const dfs = (nodes) => {
    if (nodes.length === 0) return;
    let newNodes = [];
    let xParent = null, yParent = null;
    for (let i = 0, l = nodes.length; i < l; i++) {
      const { node, parent } = nodes[i];
      if (node === null) continue;
      const val = node.val;
      if (val == x) {
        xParent = parent;
      }
      if (val === y) {
        yParent = parent
      }

      newNodes.push({ node: node.left, parent: node });
      newNodes.push({ node: node.right, parent: node });
    }

    if (xParent !== null
      && yParent !== null
      && xParent !== yParent
    ) {
      flag = true;
    } else {
      dfs(newNodes);
    }
  }
  dfs([{
    node: root,
    parent: null
  }]);
  return flag;
};
