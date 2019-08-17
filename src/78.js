/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  if (nums.length === 0) {
    return [[]];
  }
  let last = nums.splice(nums.length - 1)[0];
  let arr = subsets(nums);
  let newArr = [];
  Object.assign(newArr, arr);
  for (let item of arr) {
    newArr.push(item.concat([last]));
  }
  return newArr;
};
