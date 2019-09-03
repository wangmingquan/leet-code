/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  let i = 0;
  let l = arr.length;
  while (i <= l) {
    if (arr[i] === 0) {
      if (i + 1 <l) {
        arr.splice(l - 1, 1);
        arr.splice(i, 0, 0);
        i++;
      }
    }
    i++;
  }
};

let arr = [1,0,2,3,0,4,5,0];
duplicateZeros(arr);


arr = [1,2,3];
duplicateZeros(arr);