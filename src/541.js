/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const l = s.length;
  let newAs = [];
  let newS = '';
  for (let i = 1, t = Math.ceil(l / k / 2); i <= t; i++) {
    if (i * 2 * k >= l) {
      newAs.push(s.substr((i - 1) * 2 * k, l - (i - 1) * 2 * k));
    } else {
      newAs.push(s.substr((i - 1) * 2 * k, 2 * k));
    }
  }
  for (let i = 0, ll = newAs.length; i < ll; i++) {
    const str = newAs[i];
    newS += str.substr(0, k).split('').reverse().join('');
    if (str.length > k) {
      newS += str.substr(k, str.length);
    }
  }
  return newS;
};

// 新字符串，不需要翻转的，原封不动的拼接
// 需要翻转的，整合成字符串，整体翻转

console.log(reverseStr('abcdefg', 2)); //bacdfeg
console.log(reverseStr('abcd', 2)); // bacd
