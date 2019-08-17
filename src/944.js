/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {
  let hlength = A[0].length;
  let vlength = A.length;
  let min = 0;
  for (let i = 0; i < hlength; i++) {
    let prev = null;
    for (let j = 0; j < vlength; j++) {
      if (prev && A[j][i] < prev) {
        min++;
        break;
      }
      prev = A[j][i];
    }
  }
  return min;
};
