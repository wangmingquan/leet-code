/**
 * @see https://leetcode-cn.com/problems/jewels-and-stones/
 * @param {string} J J
 * @param {string} S S
 * @return {number} 宝石数量
 */
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (var j = 0, lS = stones.length; j < lS; j++) {
    for (var i = 0, lJ = jewels.length; i < lJ; i++) {
      if (jewels[i] === stones[j]) {
        count++;
        break;
      }
    }
  }
  return count;
};

// test case
console.log(numJewelsInStones('aA', 'aAAbbbb')); // 3
console.log(numJewelsInStones('z', 'ZZ')); // 0
