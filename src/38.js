/**
 * @see https://leetcode-cn.com/problems/count-and-say/
 * @param {number} n n
 * @return {string} result
 */
var countAndSay = function (n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return '1';
  }

  let str = '1';
  for (let i = 2; i <= n; i++) {
    let count = 0;
    let prev = '';
    let newStr = '';
    for (let j = 0, l = str.length; j < l; j++) {
      if (!prev && j === 0) {
        prev = str[j];
      }
      if (prev !== str[j]) {
        newStr += count + prev;
        prev = str[j];
        count = 1;
      } else {
        count++;
      }
      if (j === l - 1) {
        newStr += count + str[j];
      }
    }
    str = newStr;
  }
  return str;
};

// test case
console.log(countAndSay(1)); // "1"
console.log(countAndSay(4)); // "1211"
