/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let correctHeights = [...heights];
  let diffCount = 0;
  correctHeights.sort((a, b) => a - b > 0 ? 1 : -1);
  for (let i = 0, l = correctHeights.length; i < l; i++) {
    if (correctHeights[i] !== heights[i]) {
      diffCount++;
    }
  }
  return diffCount;
};
