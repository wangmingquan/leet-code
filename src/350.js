/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let arr = [];
  for (let item of nums1) {
    let index = nums2.indexOf(item);
    if (index >= 0) {
      arr.push(item);
      nums2.splice(index, 1);
    }
  }
  return arr;
};
