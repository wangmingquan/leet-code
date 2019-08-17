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
  if (!root) {
    return [];
  }
  let levels = [];
  let traval = (roots) => {
    let newRoots = [];
    let vals = [];
    for (let item of roots) {
      if (item) {
        vals.push(item.val);
      }
      if (item.left) {
        newRoots.push(item.left);
      }
      if (item.right) {
        newRoots.push(item.right);
      }
    }
    if (vals.length) {
      levels.push(vals);
    }
    if (newRoots.length) {
      traval(newRoots);
    }
  };
  traval([root]);
  return levels;
};
