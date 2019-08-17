/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
  let arr = [];
  A = A.split(' ');
  B = B.split(' ');
  arr = arr.concat(A).concat(B);
  console.log(arr);
  for (let i = 0, l = arr.length; i < l; i++) {
    let letter = arr[i];
    let flag = false;
    for (let j = i + 1; j < l; j++) {
      if (letter === arr[j]) {
        flag = true;
        arr.splice(j, 1);
        l--;
        j--;
      }
    }
    if (flag) {
      arr.splice(i, 1);
      l--;
      i--;
    }
  }
  return arr;
};
