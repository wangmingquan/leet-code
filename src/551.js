/**
 * @param {string} records
 * @return {boolean}
 */
var checkRecord = function (records) {
  const recordMap = {
    P: 0,
    A: 0,
    L: 0
  }
  let Ltimes = 0;
  for (let i = 0, l = records.length; i < l; i++) {
    const s = records[i];
    recordMap[s]++;
    if (s === 'L') {
      Ltimes++;
      if (Ltimes >= 3) {
        return false;
      }
    } else {
      Ltimes = 0;
    }
  }
  return recordMap.A < 2;
};

console.log(checkRecord('PPALLP')); // true
console.log(checkRecord('PPALLL')); // false;
