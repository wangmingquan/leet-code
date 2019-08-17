/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let obj = {
    R: 1,
    L: -1,
    U: 1,
    D: -1
  };
  let distanceX = 0;
  let distanceY = 0;
  for (var i = 0, l = moves.length; i < l; i++) {
    let item = moves[i];
    if (item === 'L' || item === 'R') {
      distanceX += obj[item];
    } else if (item === 'U' || item === 'D') {
      distanceY += obj[item];
    }
  }
  return distanceX === 0 && distanceY === 0;
};
