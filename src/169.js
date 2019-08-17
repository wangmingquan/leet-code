/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map();
  for (let item of nums) {
    let len = 1;
    if (map.has(item)) {
      len += map.get(item);
    }
    if (len > nums.length / 2) {
      return item;
    }
    map.set(item, len);
  }
};
