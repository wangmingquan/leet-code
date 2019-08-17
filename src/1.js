/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length - 1; i++) {
    let another = target - nums[i];
    let newNums = nums.slice(i + 1);
    let anotherIndex = newNums.indexOf(another);
    if (anotherIndex >= 0) {
      return [i, anotherIndex + i + 1];
    }
  }
};
