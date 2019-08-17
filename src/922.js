/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let B = [];
  let len = A.length;
  for (var i = 0; i < len; i++) {
    if (A[i] % 2 === 0) {
      B.push(A[i]);
    }
  }
  for (var i = 0; i < len; i++) {
    if (A[i] % 2 === 1) {
      B.push(A[i]);
    }
  }

  let C = [];
  for (var i = 0; i < len / 2; i++) {
    C.push(B[i]);
    C.push(B[len - i - 1]);
  }
  return C;
};
