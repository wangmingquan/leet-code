/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let f = [];
  let i; let j;
  for (i = 0; i < m; i++) {
    f[i] = [];
    for (j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        f[i][j] = 1;
        continue;
      }
      f[i][j] = f[i - 1][j] + f[i][j - 1];
    }
  }
  return f[m - 1][n - 1];
};
