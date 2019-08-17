/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  let arr = [];
  let count = 0;
  let travel = root => {
    if (root && root.val) {
      if (root.val >= L && root.val <= R) {
        count += root.val;
      }
      arr.push(root.val);
      travel(root.left);
      travel(root.right);
    }
  };
  travel(root);
  return count;
};
