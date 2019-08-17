/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  let len = grid.length;
  let h_top = [];
  let v_top = [];
  let add_sum = 0;
  for (let i = 0; i < len; i++) {
    let h_max = grid[0][i];
    let v_max = grid[i][0];
    for (let j = 0; j < len; j++) {
      h_max = h_max > grid[j][i] ? h_max : grid[j][i];
      v_max = v_max > grid[i][j] ? v_max : grid[i][j];
    }
    h_top.push(h_max);
    v_top.push(v_max);
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let current = grid[i][j];
      let topMax = h_top[i] > v_top[j] ? v_top[j] : h_top[i];
      add_sum += topMax - current;
    }
  }
  return add_sum;
};
