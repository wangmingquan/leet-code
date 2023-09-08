/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 1) return true;
  let newNArr = [];
  let getNewN = (n) =>  (n + '')
    .split('')
    .map(n => n * n)
    .reduce((a,b) => a + b);
  let newN = n;
  let flag = true;
  while (flag) {
    newN = getNewN(newN);
    if (newNArr.indexOf(newN) >= 0) {
      flag = false;
      return false;
    } else {
      newNArr.push(newN);
    }
    if (newN === n) {
      flag = false;
      return false;
    } else if (newN === 1) {
      flag = false;
      return true;
    }
  }
};


console.log(isHappy(19));
