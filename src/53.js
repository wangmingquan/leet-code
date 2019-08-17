/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  let max;
  let len = nums.length;
  let sum = 0;
  for (var i = 0; i < len; i++) {
    if (sum <= 0) {
      sum = nums[i];
    } else {
      sum += nums[i];
    }
    if (sum > max || max === undefined) {
      max = sum;
    }
  }
  return max;
};
