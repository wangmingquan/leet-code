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
var constructMaximumBinaryTree = function (nums) {
  let max = nums[0];
  let maxIndex = 0;
  for (let i = 1, l = nums.length; i < l; i++) {
    if (nums[i] > max) {
      max = nums[i];
      maxIndex = i;
    }
  }
  // console.log(nums, max, maxIndex);
  let treeNode = new TreeNode(max);
  let left = nums.slice(0, maxIndex);
  let right = nums.slice(maxIndex + 1);
  if (left.length) {
    treeNode.left = constructMaximumBinaryTree(left);
  }
  if (right.length) {
    treeNode.right = constructMaximumBinaryTree(right);
  }
  return treeNode;
};
