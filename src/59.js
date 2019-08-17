/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (n === 1) {
    return [[1]];
  }
  let [rightMin, rightMax] = [0, n - 1];
  let [downMin, downMax] = [0, n - 1];
  let [leftMin, leftMax] = [0, n - 1];
  let [upMin, upMax] = [0, n - 1];

  let arr = [];
  for (let i = 1; i <= n; i++) {
    let _arr = [];
    for (let j = 1; j <= n; j++) {
      _arr.push(0);
    }
    arr.push(_arr);
  }
  let direc = 'right';
  let x = 0;
  let y = 0;
  for (let i = 1, max = n * n; i <= max; i++) {
    arr[x][y] = i;
    if (direc === 'right') {
      y++;
      if (y === rightMax) {
        direc = 'down';
        upMin++;
      }
    } else if (direc === 'down') {
      x++;
      if (x === downMax) {
        direc = 'left';
        rightMax--;
      }
    } else if (direc === 'left') {
      y--;
      if (y === leftMin) {
        direc = 'up';
        leftMin++;
        downMax--;
      }
    } else if (direc === 'up') {
      x--;
      if (x === upMin) {
        rightMin++;
        direc = 'right';
      }
    }
  }
  return arr;
};
