/**
 * @see https://leetcode-cn.com/problems/sum-of-two-integers/
 * @param {number} a a
 * @param {number} b b
 * @return {number} total
 */
var getSum = function (a, b) {
  let bitXor = 0;
  let bitAnd = 0;
  while (0 !== b) {
    bitXor = a ^ b; // 异或，提取出不同位
    bitAnd = a & b; // 与，提取进位
    a = bitXor;
    b = bitAnd << 1;
  }
  return a;
};

// test case
console.log(getSum(1, 2)); // 3
