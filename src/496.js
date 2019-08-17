/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function (findNums, nums) {
  let next = [];
  let numsLen = nums.length;
  for (let i = 0, l = findNums.length; i < l; i++) {
    let item = findNums[i];
    let index = nums.indexOf(item) + 1;
    let nextElement = -1;
    for (; index < numsLen; index++) {
      if (nums[index] > item) {
        nextElement = nums[index];
        break;
      }
    }
    next.push(nextElement);
  }
  return next;
};
