/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let num = 0;
  for (let i = 0, l = nums.length; i < l; i++) {
    num ^= nums[i];
  }
  return num;
};
