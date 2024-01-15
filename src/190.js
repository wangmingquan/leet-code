/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  const newN = ('' + n).split('').reverse().join('');
  const n10 = parseInt(newN, 2);
  return `${n10}(${newN})`;
};

console.log(reverseBits('00000010100101000001111010011100')) // 964176192 (00111001011110000010100101000000)
console.log(reverseBits('11111111111111111111111111111101')) // 3221225471 (10111111111111111111111111111111)
