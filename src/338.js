/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    const str = i.toString(2).replace(/0/g, '');
    arr.push(str.length);
  }
  return arr;
};

console.log(countBits(2));
console.log(countBits(5));
