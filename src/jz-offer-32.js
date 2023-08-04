/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let arrs = [];
  const dfs = nodes => {
    if (nodes.length === 0) return;
    let arr = [];
    let newNodes = [];
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node !== null) {
        arr.push(node.val);
        newNodes.push(node.left);
        newNodes.push(node.right);
      }
    }
    if  (arr.length > 0) {
      arrs.push(arr);
    }
    dfs(newNodes);
  }
  dfs([root]);
  return arrs;
};
