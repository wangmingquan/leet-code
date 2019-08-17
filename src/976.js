/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
  A.sort((a, b) => a - b);
  let allSides = 0;
  for (let i = A.length - 1; i >= 2; i--) {
    if (A[i] < A[i - 1] + A[i - 2]) {
      allSides = A[i] + A[i - 1] + A[i - 2];
      break;
    }
  }
  return allSides;
};
