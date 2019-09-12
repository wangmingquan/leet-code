/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
  let profit = 0;
  for (let i = 1, l = prices.length; i < l; i++) {
    if (prices[i] >= prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};

// test case
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfit([1, 2, 3, 4, 5])); // 4

