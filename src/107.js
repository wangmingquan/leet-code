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
var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }
  let rel = [];
  let traval = roots => {
    let level = [];
    let newRoots = [];
    for (var item of roots) {
      level.push(item.val);
      if (item.left) newRoots.push(item.left);
      if (item.right) newRoots.push(item.right);
    }
    if (newRoots.length) {
      traval(newRoots);
    }
    rel.push(level);
  };
  traval([root]);
  return rel;
};
