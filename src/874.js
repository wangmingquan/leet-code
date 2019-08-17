/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  let x = 0;
    let y = 0;
  let directions = ['up', 'right', 'down', 'left'];
  let direction = 'up';
  let index = 0;
  let set = new Set();
  let max = 0;
  for (let item of obstacles) {
    set.add(`${item[0]}-${item[1]}`);
  }
  let l = obstacles.length;
  for (let item of commands) {
    if (item === -1) {
      // 右转
      index++;
      if (index > 3) {
        index = 0;
      }
      direction = directions[index];
    } else if (item === -2) {
      // 左转
      index--;
      if (index < 0) {
        index = 3;
      }
      direction = directions[index];
    } else {
      // 移动
      if (direction === 'up') {
        for (let i = 0; i < item; i++) {
          if (set.has(`${x}-${y + 1}`)) {
            break;
          }
          y++;
        }
      } else if (direction === 'right') {
        for (let i = 0; i < item; i++) {
          if (set.has(`${x + 1}-${y}`)) {
            break;
          }
          x++;
        }
      } else if (direction === 'down') {
        for (let i = 0; i < item; i++) {
          if (set.has(`${x}-${y - 1}`)) {
            break;
          }
          y--;
        }
      } else if (direction === 'left') {
        for (let i = 0; i < item; i++) {
          if (set.has(`${x - 1}-${y}`)) {
            break;
          }
          x--;
        }
      }
    }
    let _max = x * x + y * y;
    max = max > _max ? max : _max;
  }
  return max;
};
