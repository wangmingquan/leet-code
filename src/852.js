/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
  let max = A[0];
  let maxIndex = 0;
  for (let i = 1, l = A.length; i <= l; i++) {
    if (A[i] > max) {
      max = A[i];
      maxIndex = i;
    }
  }
  return maxIndex;
};
