/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  let vlen = A.length;
  let hlen = A[0].length;
  for (var i = 0; i < vlen; i++) {
    A[i] = A[i].reverse();
    for (var j = 0; j < hlen; j++) {
      A[i][j] = A[i][j] === 1 ? 0 : 1;
    }
  }
  return A;
};
