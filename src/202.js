/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n === 1) {
    return true;
  }
  let newNArr = [];
  let getNewN = function (n) {
    let arr = (n + '').split('');
    let sum = 0;
    for (let item of arr) {
      sum += item * item;
    }
    return sum;
  };
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
