/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let l = nums.length;
  let sum = 0;
  for (let i = 1; i <= l; i++) {
    sum += i;
    sum -= nums[i - 1];
  }
  return sum;
  // nums.sort((a, b) => a -b);
  // let min = 0;
  // let l = nums.length;
  // while (min <= l) {
  //   if (nums.indexOf(min) < 0) {
  //     return min;
  //   }
  //   min++;
  // }
};
