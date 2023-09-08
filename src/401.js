/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  if (turnedOn >= 9) return [];
  const hLeds = ['8', '4', '2', '1'];
  const mLeds = ['32', '16', '8', '4', '2', '1'];
  const kinds = [];
  const getKinds = (leds, count, type) => {
    if (count === 0) { return [ type === 'h' ? '0' : '00'] };
  }
  for (let i = 0; i <= turnedOn; i++) {
    const hs = getKinds(hLeds, i, 'h');
    const ms = getKinds(mLeds, turnedOn - i, 'm');
  }
};

console.log(readBinaryWatch(1)); // ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
console.log(readBinaryWatch(9)); // []
