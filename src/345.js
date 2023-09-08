/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const sa = s.split('');
  const reversePos = [];
  for (let i = 0, l = sa.length; i < l; i++) {
    if (set.has(sa[i])) {
      reversePos.push(i);
    }
  }
  for (let i = 0, l = reversePos.length; i < l; i++, l--) {
    const startPos = reversePos[i],
      endPos = reversePos[l - 1];
    const tempChar = sa[startPos];
    sa[startPos] = sa[endPos];
    sa[endPos] = tempChar;
  }
  return sa.join('');
};

console.log(reverseVowels('hello'));
console.log(reverseVowels('leetcode'));
console.log(reverseVowels('aA'));
