/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const set = new Set();
  for (let i = 0, l = nums.length; i < l; i++) {
    set.add(nums[i]);
  }
  const arr = [...set];
  arr.sort((a, b) => b - a);
  return arr[2] === undefined ? arr[0] : arr[2];
};

console.log(thirdMax([3, 2, 1])); // 3
console.log(thirdMax([2, 1])); // 2
console.log(thirdMax([2, 2, 3, 1])); // 1
console.log(thirdMax([3, 3, 4, 3, 4, 3, 0, 3, 3])); // 0
