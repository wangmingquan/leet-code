/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let gCount = 1;
  let max = nums[0];
  let lCount = 1;
  for (let i = 1, l = nums.length; i < l; i++) {
    const current = nums[i];
    if (current > max) {
      lCount++;
      gCount = lCount > gCount ? lCount : gCount;
    } else {
      lCount = 1;
    }
    max = current;
  }
  return gCount
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7])); // 3
console.log(findLengthOfLCIS([2, 2, 2, 2, 2])); // 1
console.log(findLengthOfLCIS([1, 3, 5, 7])); // 4
