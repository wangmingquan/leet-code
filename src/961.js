/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
  let obj = {};
  for (let i = 0, l = A.length; i < l; i++) {
    if (obj[A[i]] === 1) {
      return A[i];
    } else {
      obj[A[i]] = 1;
    }
  }
};
