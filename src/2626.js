/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  if (nums.length === 0) return init;
  let temp = init;
  for (let i = 0, l = nums.length; i < l; i++) {
    temp = fn(temp, nums[i])
  }
  return temp;
};
