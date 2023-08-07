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
  if (nums.length === 0) return null;
  if (nums.length === 1) return new TreeNode(nums[0], null, null);
  if (nums.length === 2) return new TreeNode(nums[1], new TreeNode(nums[0], null));
  const numsLength = nums.length;
  const rootIndex = Math.floor(numsLength / 2);
  const rootVal = nums[rootIndex];
  return new TreeNode(
    rootVal,
    sortedArrayToBST(nums.slice(0, rootIndex)),
    sortedArrayToBST(nums.slice(rootIndex + 1, numsLength))
  );
};
