/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let set = new Set();
  for (let item of nums) {
    set.add(item);
  }
  return set.size !== nums.length;
};
