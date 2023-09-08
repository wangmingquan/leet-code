/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let l1 = num1.length, l2 = num2.length;
  let res = '';
  let add1 = false;
  while (l1 > 0 || l2 > 0) {
    const n1 = parseInt(num1[l1 -1] || 0);
    const n2 = parseInt(num2[l2 -1] || 0);
    let newStr = n1 + n2;
    if (add1) {
      newStr += 1;
    }
    if (newStr >= 10) {
      add1 = true;
      newStr -= 10;
    } else {
      add1 = false;
    }
    res = newStr + res;
    l1--;
    l2--;
  }
  if (add1) {
    res = '1' + res;
  }
  return res;
};

console.log(addStrings('11', '123')); //134
console.log(addStrings('456', '77')); //533
console.log(addStrings('0', '0')); //0
console.log(addStrings('66', '77')); //143
