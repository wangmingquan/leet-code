/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let arr = [];
  for (let i = 0; i <= rowIndex; i++) {
    arr.push([1]);
    for (let j = 1; j <= i; j++) {
      if (i > 0) {
        let a = arr[i - 1][j - 1];
        let b = arr[i - 1][j] || 0;
        arr[i].push(a + b);
      }
    }
  }
  return arr[rowIndex];
};
