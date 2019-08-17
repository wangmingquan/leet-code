/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  if (nums.length === 3) {
    return nums[0] * nums[1] * nums[2];
  }
  let zNums = [];
  let fNums = [];
  for (let item of nums) {
    if (item > 0) {
      zNums.push(item);
    } else {
      fNums.push(item);
    }
  }
  zNums.sort((a, b) => b - a);
  fNums.sort((a, b) => a - b);
  // console.log(zNums);
  // console.log(fNums);
  if (zNums.length >= 3) {
    if (fNums.length >= 2) {
      if (zNums[1] * zNums[2] > fNums[0] * fNums[1]) {
        return zNums[0] * zNums[1] * zNums[2];
      } else {
        return zNums[0] * fNums[1] * fNums[0];
      }
    } else {
      return zNums[0] * zNums[1] * zNums[2];
    }
  }
  if (zNums.length === 2) {
    return zNums[0] * zNums[1] * fNums[fNums.length - 1];
  }
  if (zNums.length === 1) {
    return zNums[0] * fNums[1] * fNums[0];
  }
};
