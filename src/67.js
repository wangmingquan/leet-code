/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const lena = a.length;
  const lenb = b.length;
  let maxLen = 0;
  // 将小的那个数前面进行补0
  if (lena > lenb) {
    maxLen = lena;
    b = b.padStart(lena, '0');
  } else {
    maxLen = lenb;
    a = a.padStart(lenb, '0');
  }
  a = a.split('');
  b = b.split('');
  // 是否进位
  let add1 = false;
  // sum
  let sumArr = [];
  while (maxLen > 0) {
    let itema = parseInt(a[maxLen - 1]);
    let itemb = parseInt(b[maxLen - 1]);
    let sum = itema + itemb;
    if (add1) {
      sum++;
    }
    if (sum === 0 || sum === 1) {
      sumArr.unshift(sum);
      add1 = false;
    } else if (sum === 2) {
      sumArr.unshift(0);
      add1 = true;
    } else if (sum === 3) {
      sumArr.unshift(1);
      add1 = true;
    }
    maxLen--;
  }
  if (add1) {
    sumArr.unshift(1);
  }
  return sumArr.join('');
};
