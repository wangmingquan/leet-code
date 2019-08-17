/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let currentMax = 0;
  for (let i = 0, l = nums.length; i < l; i++) {
    if (nums[i] === 1) {
      currentMax++;
      if (currentMax >= max) {
        max = currentMax;
      }
    } else {
      currentMax = 0;
    }
  }
  return max;
};
