/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  let str = '';
  if (num < 0) {
    num = 4294967296 + num
  }
  while (num >= 16) {
    const lastStr = num % 16;
    if (lastStr < 10) {
      str = lastStr + str;
    } else {
      str = String.fromCharCode(lastStr + 87) + str;
    }
    num = Math.floor(num / 16);
  }
  return (
    num >= 10
      ? String.fromCharCode(num + 87)
      : num
  ) + str;
};

console.log(toHex(26));
console.log(toHex(-1));
console.log(toHex(0));
console.log(toHex(16));
