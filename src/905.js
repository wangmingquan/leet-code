/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let [arr1, arr2] = [[], []];
  for (var i = 0, l = A.length; i < l; i++) {
    if (A[i] % 2 === 0) {
      arr1.push(A[i]);
    } else {
      arr2.push(A[i]);
    }
  }
  return arr1.concat(arr2);
};
