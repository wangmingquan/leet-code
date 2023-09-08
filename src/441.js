/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let lines = 1;
  let coins = 1;
  let remin = n - coins;
  while (remin > 0) {
    coins++;
    if (remin >= coins) {
      lines++;
    }
    remin -= coins;
  }
  return lines;
};

console.log(arrangeCoins(3)); // 2
console.log(arrangeCoins(5)); // 2
console.log(arrangeCoins(8)); // 3
console.log(arrangeCoins(10)); // 4
