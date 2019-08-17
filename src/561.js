/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a < b ? -1 : 1);
  let sum = 0;
  for (let i = 0, n = nums.length / 2; i < n; i++) {
    sum += nums[i * 2];
  }
  return sum;
};
