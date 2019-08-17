/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  x = x.toString(2);
  y = y.toString(2);
  let [xlen, ylen] = [x.length, y.length];
  let maxlen = xlen > ylen ? xlen : ylen;
  if (xlen > ylen) {
    y = y.padStart(maxlen, '0');
  } else {
    x = x.padStart(maxlen, '0');
  }
  let index = 0;
  let diffCount = 0;
  while (index < maxlen) {
    if (x[index] !== y[index]) {
      diffCount++;
    }
    index++;
  }
  return diffCount;
};
