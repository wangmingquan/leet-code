/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  let lines = matrix.length - 1;
  let rows = matrix[0].length;

  while (lines > 0) {
    let currentLine = matrix[lines];
    let prevLine = matrix[lines - 1];
    for (let i = 1; i < rows; i++) {
      if (currentLine[i] != prevLine[i - 1]) {
        return false;
      }
    }
    lines--;
  }
  return true;
};
