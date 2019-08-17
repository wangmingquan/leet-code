/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let str = '';
  let count = 1;
  // 遍历字符串
  for (let i = 1, l = S.length; i < l; i++) {
    if (S[i] === '(') {
      // 遇到 ( 入栈
      count++;
    } else {
      count--;
    }
    if (count !== 0) {
      str += S[i];
    } else {
      i++;
      count = 1;
    }
  }

  return str;
};
