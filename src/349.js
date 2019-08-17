/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let set = new Set();
  for (let item of nums1) {
    if (nums2.indexOf(item) >= 0) {
      set.add(item);
    }
  }
  return [...set];
};
