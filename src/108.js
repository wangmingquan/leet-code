/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }
  let len = nums.length;
  if (len === 1) {
    return new TreeNode(nums[0]);
  } else {
    let middleIndex = Math.floor(len / 2);
    let val = nums.splice(middleIndex, 1)[0];
    let left = nums.splice(0, middleIndex);
    let right = [...nums];
    let root = new TreeNode(val);
    if (left.length) {
      root.left = sortedArrayToBST(left);
    }
    if (right.length) {
      root.right = sortedArrayToBST(right);
    }
    return root;
  }
};
