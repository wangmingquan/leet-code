/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let ranges = [];
  let start;
  let end;
  let newRange = true;
  for (let i = 0, l = nums.length; i < l; i++) {
    if (newRange) {
      start = nums[i];
      newRange = false;
    }
    end = nums[i];
    if (i + 1 >= l) {
      newRange = true;
    } else if (end + 1 !== nums[i + 1]){
      newRange = true;
    }

    if (newRange) {
      ranges.push(start === end ? "" + start : `${start}->${end}`);
    }
  }
  return ranges;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7])); //["0->2", "4->5", "7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); //["0", "2->4", "6", "8->9"]
