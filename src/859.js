/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
  let Al = A.length;
  let Bl = B.length;
  let diffCount = 0;
  let diffArr = [];
  if (Al !== Bl) return false;
  if (Al < 2) return false;

  for (let i = 0, l = Al; i < l; i++) {
    if (A[i] !== B[i]) {
      diffCount++;
      if (diffCount > 2) {
        return false;
      }
      diffArr.push(A[i]);
      diffArr.push(B[i]);
    }
  }
  if (diffCount === 2) {
    // 相差两个的情况下，互相调换有恰好可以，证明是亲密字符串
    if (diffArr[0] === diffArr[3] && diffArr[1] === diffArr[2]) {
      return true;
    } else {
      return false;
    }
  } else if (diffCount === 0) {
    // 如果一个字母都不差，只要有重复的字符串，则一定是亲密字符串
    if (new Set(A.split('')).size < Al) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
