/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  const l = nums.length;
  if (l === 1) {
    return 0;
  }
  let newNums = [...nums];
  newNums.sort((a, b) => b - a);
  const max = newNums[0];
  let flag = true;
  for (let i = 1; i < l; i++) {
    if (newNums[i] * 2 > max) {
      flag = false;
      break;
    }
  }
  return flag ? nums.indexOf(max) : -1;
};

console.log(dominantIndex([3, 6, 1, 0])); // 1
console.log(dominantIndex([1, 2, 3, 4])); // -1
console.log(dominantIndex([1])); // 0
console.log(dominantIndex([0, 0, 1, 3])); // 3
