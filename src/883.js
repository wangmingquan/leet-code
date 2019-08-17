/**
 * @param {array<number>} grid grid
 * @return {number} number
 */
var projectionArea = function (grid) {
  let total = 0; // 总面积
  let gridCount = grid.length;
  let colunmCount = grid[0].length;
  for (let i = 0; i < gridCount; i++) {
    let max = 0;
    for (let j = 0; j < colunmCount; j++) {
      let current = grid[i][j];
      max = max > current ? max : current;
      if (current) total++;
    }
    total += max;
  }
  for (let j = 0; j < colunmCount; j++) {
    let max = 0;
    for (let i = 0; i < gridCount; i++) {
      max = max > grid[i][j] ? max : grid[i][j];
    }
    total += max;
  }

  return total;
};
