/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const unranked = [...score];
  score.sort((a, b) => b - a);
  const topNames = [
    'Gold Medal',
    'Silver Medal',
    'Bronze Medal'
  ];
  const res = [];
  for (let i = 0, l = unranked.length; i < l; i++) {
    const index = score.indexOf(unranked[i]);
    res.push(topNames[index] || index + 1 + '') ;
  }
  return res;
};

const score = [10, 3, 8, 9, 4];
console.log(findRelativeRanks(score));
// 输出：["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]
