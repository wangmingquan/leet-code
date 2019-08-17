/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  let kinds = new Set();
  for (let i = 0, l = candies.length; i < l; i++) {
    kinds.add(candies[i]);
  }
  return candies.length / 2 < kinds.size ? candies.length / 2 : kinds.size;
};
