/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  const kinds = [];
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      const hl = h.toString(2).split('0').join('').length;
      const ml = m.toString(2).split('0').join('').length;
      if (hl + ml === turnedOn) {
        kinds.push(h + ':' + (m < 10 ? '0' : '') + m);
      }
    }
  }
  return kinds;
};

console.log(readBinaryWatch(1)); // ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
console.log(readBinaryWatch(9)); // []
