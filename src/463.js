/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let aroundLength = 0;
  let xlen = grid[0].length;
  let ylen = grid.length;
  for (let y = 0; y < ylen; y++) {
    for (let x = 0; x < xlen; x++) {
      if (grid[y][x] === 1) {
        // 左
        if (x === 0) {
          aroundLength++;
        } else if (grid[y][x - 1] === 0) {
          aroundLength++;
        }
        // 上
        if (y === 0) {
          aroundLength++;
        } else if (grid[y - 1][x] === 0) {
          aroundLength++;
        }

        // 右
        if (x === xlen - 1) {
          aroundLength++;
        } else if (grid[y][x + 1] === 0) {
          aroundLength++;
        }

        // 下
        if (y === ylen - 1) {
          aroundLength++;
        } else if (grid[y + 1][x] === 0) {
          aroundLength++;
        }
      }
    }
  }
  return aroundLength;
};
