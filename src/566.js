/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  let xlen = nums[0].length;
  let ylen = nums.length;
  let flatNums = [];
  for (let y = 0; y < ylen; y++) {
    for (let x = 0; x < xlen; x++) {
      flatNums.push(nums[y][x]);
    }
  }
  if (flatNums.length !== r * c) {
    return nums;
  }
  let index = 0;
  let newNums = [];
  for (let y = 0; y < r; y++) {
    newNums.push([]);
    for (let x = 0; x < c; x++) {
      newNums[y].push(flatNums[index]);
      index++;
    }
  }
  return newNums;
};
