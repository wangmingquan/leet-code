/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function (A, K) {
  let min = A[0];
    let max = A[0];
  for (let item of A) {
    if (item < min) {
      min = item;
    }
    if (item > max) {
      max = item;
    }
  }
  let range = max - min - K * 2;
  // 如果最大值减去最小值在小于2k，一定能做到所有的值相同
  return range < 0 ? 0 : range;
};
