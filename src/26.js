/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let c;
  for (var i = 0, l = nums.length; i < l; i++) {
    if (c === nums[i]) {
      nums.splice(i, 1);
      l--;
      i--;
    } else {
      c = nums[i];
    }
  }
  return nums.length;
};
