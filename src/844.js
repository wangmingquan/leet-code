/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  let stackS = [];
  let stackT = [];
  for (let item of S) {
    if (item === '#') {
      stackS.pop();
    } else {
      stackS.push(item);
    }
  }
  for (let item of T) {
    if (item === '#') {
      stackT.pop();
    } else {
      stackT.push(item);
    }
  }
  return stackS.join('') === stackT.join('');
};
