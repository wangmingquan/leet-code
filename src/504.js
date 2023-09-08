/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  let res = '';
  let newNum = Math.abs(num);
  while (newNum > 6) {
    const lastStr = newNum % 7;
    newNum -= lastStr;
    newNum /= 7;
    res = lastStr + res;
  }
  res = newNum + res;
  if (num < 0) {
    res = '-' + res;
  }
  return res;
};

console.log(convertToBase7(100)); // "202"
console.log(convertToBase7(-7)); // "-10"

for (let i = 0; i < 1000; i++) {
  console.log(i, convertToBase7(i));
}
