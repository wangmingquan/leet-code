/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (target < nums[0]) {
    return 0;
  }
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  for (var i = 0, l = nums.length; i < l; i++) {
    let current = nums[i];
    if (current === target) {
      return i;
    } else if (target > current && target < nums[i + 1]) {
      return i + 1;
    }
  }
};
