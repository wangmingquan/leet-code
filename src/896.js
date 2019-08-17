/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  let l = A.length;
  let changeBig = true;
  if (A[0] > A[l - 1]) {
    changeBig = false;
  }
  for (let i = 1; i < l; i++) {
    if (changeBig) {
      if (A[i] < A[i - 1]) {
        return false;
      }
    } else {
      if (A[i] > A[i - 1]) {
        return false;
      }
    }
  }
  return true;
};
