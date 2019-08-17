/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let obj = {};
  let n = nums.length;
  let repeatNum = 0;
  let missNum = 0;
  for (let i = 1; i <= n; i++) {
    obj[i] = 0;
  }
  for (let item of nums) {
    obj[item]++;
  }
  for (let i in obj) {
    if (obj[i] === 2) {
      repeatNum = i;
    } else if (obj[i] === 0) {
      missNum = i;
    }
  }
  return [parseInt(repeatNum), parseInt(missNum)];
};
