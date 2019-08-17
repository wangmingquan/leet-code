/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let averageLevels = [];
  let traval = roots => {
    let newRoots = [];
    let vals = [];
    let sum = 0;
    for (let item of roots) {
      if (item) {
        vals.push(item.val);
        sum += item.val;
      }
      if (item.left) {
        newRoots.push(item.left);
      }
      if (item.right) {
        newRoots.push(item.right);
      }
    }
    if (vals.length) {
      averageLevels.push(sum / vals.length);
    }
    if (newRoots.length) {
      traval(newRoots);
    }
  };
  traval([root]);
  return averageLevels;
};
