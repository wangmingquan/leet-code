/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.nums = nums;
  this.nums.sort((a, b) => {
    return b - a;
  });
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.nums.length < this.k) {
    this.nums.push(val);
    this.nums.sort((a, b) => {
      return b - a;
    });
  } else {
    for (let i = 0, l = this.nums.length; i < l; i++) {
      if (val > this.nums[i]) {
        this.nums.splice(i, 0, val);
        break;
      }
    }
  }
  // console.log(val, this.nums);
  console.log(this.nums[this.k - 1]);
  return this.nums[this.k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

const kthLargest = new KthLargest(1, [0]);
kthLargest.add(-1);   // return -1
kthLargest.add(1);   // return 0
kthLargest.add(-2);  // return 0
kthLargest.add(-4);   // return 0
kthLargest.add(3);   // return 1

// [[1, []], [-3], [-2], [-4], [0], [4]]
// [[2,[0]],[-1],[1],[-2],[-4],[3]]
