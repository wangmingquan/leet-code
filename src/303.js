/**
 * @param {number[]} nums
 */

var NumArray = function(nums) {
  this.nums = nums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */

NumArray.prototype.sumRange = function(i, j) {
  let count = 0;
  while (i <= j) {
    count += this.nums[i];
    i++;
  }
  return count;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// test case
var obj = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(obj.sumRange(0, 2));
console.log(obj.sumRange(2, 5));
console.log(obj.sumRange(0, 5));
