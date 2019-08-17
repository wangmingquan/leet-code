/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  let RposX = 0;
  let RposY = 0;
  let carCount = 0;
  for (let i = 0; i < 8; i++) {
    let found = false;
    for (let j = 0; j < 8; j++) {
      if (board[j][i] === 'R') {
        found = true;
        RposX = i;
        RposY = j;
        break;
      }
    }
    if (found) break;
  }

  // 上
  for (let start = RposY - 1; start >= 0; start--) {
    if (board[start][RposX] === 'B') {
      break;
    }
    if (board[start][RposX] === 'p') {
      carCount++;
      break;
    }
  }

  // 下
  for (let start = RposY + 1; start < 8; start++) {
    if (board[start][RposX] === 'B') {
      break;
    }
    if (board[start][RposX] === 'p') {
      carCount++;
      break;
    }
  }

  // 左
  for (let start = RposX - 1; start >= 0; start--) {
    if (board[RposY][start] === 'B') {
      break;
    }
    if (board[RposY][start] === 'p') {
      carCount++;
      break;
    }
  }

  // 右
  for (let start = RposX + 1; start < 8; start++) {
    if (board[RposY][start] === 'B') {
      break;
    }
    if (board[RposY][start] === 'p') {
      carCount++;
      break;
    }
  }

  return carCount;
};
