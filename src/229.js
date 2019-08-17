/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let map = new Map();
  let set = new Set();
  let l = nums.length;
  for (let item of nums) {
    let len = 1;
    if (map.has(item)) {
      len += map.get(item);
    }
    if (len > l / 3) {
      set.add(item);
    }
    map.set(item, len);
  }
  return [...set];
};
