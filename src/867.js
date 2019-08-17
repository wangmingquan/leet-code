/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  let newArr = [];
  for (var i = 0, l = A.length; i < l; i++) {
    let item = A[i];
    for (var j = 0, jl = item.length; j < jl; j++) {
      if (!newArr[j]) {
        newArr[j] = [];
      }
      newArr[j].push(A[i][j]);
    }
  }
  return newArr;
};
