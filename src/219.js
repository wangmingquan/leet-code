/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = {};
  for (let i = 0, l = nums.length; i < l; i++) {
    const value = nums[i];
    if (!map[value]) {
      map[value] = [i];
    } else {
      const lastIndex = map[value][map[value].length - 1];
      if (i - lastIndex <= k) {
        return true;
      } else {
        map[value].push(i);
      }
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
