/*
每次「迁移」操作将会引发下述活动：

位于 grid[i][j] 的元素将会移动到 grid[i][j + 1]。
位于 grid[i][m - 1] 的元素将会移动到 grid[i + 1][0]。
位于 grid[n - 1][m - 1] 的元素将会移动到 grid[0][0]。
*/

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */

var shiftGrid = function (grid, k) {
  let cols = grid[0].length;
  let rows = grid.length;
  let len = cols * rows;
  let items = [];
  let newGrid = [];
  for (let item of grid) {
    items = items.concat(item);
  }
  let step = 0;
  k = k % len;
  while (step < k) {
    let last = items.splice(len - 1, 1)[0];
    items.unshift(last);
    step++;
  }
  for (let i = 0; i < rows; i++) {
    newGrid.push([]);
    for (let j = 0; j < cols; j++) {
      newGrid[i].push(items[i * cols + j]);
    }
  }

  return newGrid;
};

console.log(shiftGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1)); // [[9,1,2],[3,4,5],[6,7,8]]
console.log(shiftGrid([[3, 8, 1, 9], [19, 7, 2, 5], [4, 6, 11, 10], [12, 0, 21, 13]], 4)); // [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
console.log(shiftGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 9)); // [[1,2,3],[4,5,6],[7,8,9]]
