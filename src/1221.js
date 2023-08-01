/**
在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。
给出一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。
返回可以通过分割得到的平衡字符串的最大数量。

示例 1：
输入：s = "RLRRLLRLRL"
输出：4
解释：s 可以分割为 "RL", "RRLL", "RL", "RL", 每个子字符串中都包含相同数量的 'L' 和 'R'。

示例 2：
输入：s = "RLLLLRRRLR"
输出：3
解释：s 可以分割为 "RL", "LLLRRR", "LR", 每个子字符串中都包含相同数量的 'L' 和 'R'。

示例 3：
输入：s = "LLLLRRRR"
输出：1
解释：s 只能保持原样 "LLLLRRRR".
*/

/**
 * @param {string} s
 * @return {number}
 */

var balancedStringSplit = function (s) {
  s = s.split('');
  let count = 0;
  let subStr = [];
  const isBalancedString = (a, b) => {
    let aRC = 0;
    let aLC = 0;
    let bRC = 0;
    let bLC = 0;
    for (let item of a) {
      if (item === 'R') {
        aRC++;
      } else {
        aLC++;
      }
    }
    for (let item of b) {
      if (item === 'R') {
        bRC++;
      } else {
        bLC++;
      }
    }
    return aRC === bLC && aLC === bRC;
  };
  for (let i = 0, l = s.length; i < l; i++) {
    subStr.push(s[i]);
    let subStrLen = subStr.length;
    if (isBalancedString(subStr, s.slice(i + 1, i + 1 + subStrLen))) {
      count++;
      s.splice(0, subStrLen * 2);
      i -= subStrLen;
      l -= subStrLen * 2;
      subStr = [];
    }
  }
  return count;
};

console.log(balancedStringSplit('RLRRLLRLRL')); // 4
console.log(balancedStringSplit('RLLLLRRRLR')); // 3
console.log(balancedStringSplit('LLLLRRRR')); // 1

// let a = [1, 2, 3, 4, 5, 6];
// let b = a.slice(1, 0 + 1 + 1);
// console.log(a, b);
