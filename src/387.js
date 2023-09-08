/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let firstUniqCharPosition = -1;
  const map = {};
  const l = s.length;
  for (let i = 0; i < l; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }
  for (let i = 0; i < l; i++) {
    if (map[s[i]] === 1) {
      firstUniqCharPosition = i;
      break;
    }
  }
  return firstUniqCharPosition;
};

console.log(firstUniqChar('leetcode')); // 0
console.log(firstUniqChar('loveleetcode')); // 2
console.log(firstUniqChar('aabb')); // 2
