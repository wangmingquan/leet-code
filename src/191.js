/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function(n) {
  n = n.toString(2);
  let index = 0;
  let count = 0;
  while (index < n.length) {
    if (n[index] === '1') {
      count++;
    }
    index++;
  }
  return count;
};

// test case
console.log(hammingWeight(0b00000000000000000000000000001011));
console.log(hammingWeight(0b00000000000000000000000010000000));
console.log(hammingWeight(0b11111111111111111111111111111101));
