/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let title = '';
  while (columnNumber > 0) {
    let lastNumber = columnNumber % 26;
    if (columnNumber < 27) {
      title = String.fromCharCode(columnNumber + 64) + title;
      columnNumber = 0;
    } else {
      if (lastNumber === 0) {
        lastNumber = 26;
      }
      title = String.fromCharCode(lastNumber + 64) + title;
      columnNumber = (columnNumber - lastNumber) / 26;
    }
    // console.log({ lastNumber, columnNumber });
  }
  return title;
};

console.log(convertToTitle(1)); // A
console.log(convertToTitle(28)); // AB
console.log(convertToTitle(52)); // AZ
console.log(convertToTitle(701)); // ZY
console.log(convertToTitle(2147483647)); // FXSHRXW
