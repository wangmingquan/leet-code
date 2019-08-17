/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (var i = 0, l = nums.length; i < l; i++) {
    if (val === nums[i]) {
      nums.splice(i, 1);
      l--;
      i--;
    }
  }
  return nums.length;
};
