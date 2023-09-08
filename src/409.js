/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const map = {};
  let count = 0;
  for (let i = 0, l = s.length; i < l; i++) {
    const char = s[i];
    if (map[char]) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  }

  for (let key in map) {
    const item = map[key];
    count += Math.floor(item / 2) * 2;
  }
  return count !== s.length ? count + 1 : count;
};

console.log(longestPalindrome('abccccdd')); // 7
console.log(longestPalindrome('a')); // 1
console.log(longestPalindrome('aaaaaccc')); // 7

// step1 找到所有字母出现的次数
// 能被 2 整除的，均可回文
// 如果还有一个单次数的，再+1
