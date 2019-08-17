/**
 * @see https://leetcode-cn.com/problems/jewels-and-stones/
 * @param {string} J J
 * @param {string} S S
 * @return {number} 宝石数量
 */
var numJewelsInStones = function (J, S) {
  let count = 0;
  for (var i = 0, lJ = J.length; i < lJ; i++) {
    for (var j = 0, lS = S.length; j < lS; j++) {
      if (J[i] === S[j]) {
        count++;
      }
    }
  }
  return count;
};

// test case
console.log(numJewelsInStones('aA', 'aAAbbbb')); // 3
console.log(numJewelsInStones('z', 'ZZ')); // 0
