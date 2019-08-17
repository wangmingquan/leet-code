/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  // nums.sort((a, b) => a - b);
  let min = 1;
  let max = nums.length;
  let lackArr = [];
  for (; min <= max; min++) {
    if (nums.indexOf(min) < 0) {
      lackArr.push(min);
    }
  }
  return lackArr;
};
