/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let max = 0;
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    map[num] = (map[num] || 0) + 1;
  }
  for (let key in map) {
    const next = parseInt(key) + 1 + '';
    if (map[next]) {
      max = Math.max(max, map[key] + map[next]);
    }
  }
  return max;
};


console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); // 5
console.log(findLHS([1, 2, 3, 4])); // 2
console.log(findLHS([1,1,1,1])); // 0
