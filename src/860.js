/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  if (bills[0] !== 5) return false;
  let fives = 0;
  let teens = 0;
  for (let i = 0, l = bills.length; i < l; i++) {
    if (bills[i] === 5) {
      fives++;
    } else if (bills[i] === 10) {
      teens++;
      fives--;
    } else if (bills[i] === 20) {
      if (teens > 0) {
        teens--;
        fives--;
      } else {
        fives -= 3;
      }
    }
    if (fives < 0) {
      return false;
    }
  }
  return true;
};
