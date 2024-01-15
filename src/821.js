/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let res = [];
  for (let i = 0, l = s.length; i < l; i++) {
    let paddingLeft = 0, paddingRight = 0;
    let leftMathched = false, rightMathched = false;
    let pl = i, pr = i;
    if (s[i] === c) {
      res.push(0);
      continue;
    }
    while (pl > 0 && !leftMathched) {
      pl--;
      paddingLeft++;
      if (s[pl] === c) {
        leftMathched = true;
      }
    }
    while (pr < l - 1 && !rightMathched) {
      pr++;
      paddingRight++;
      if (s[pr] === c) {
        rightMathched = true;
      }
    }
    let min;
    if (!leftMathched) { min = paddingRight; }
    else if (!rightMathched) { min = paddingLeft; }
    else {
      min = paddingLeft > paddingRight ? paddingRight : paddingLeft;
    }
    res.push(min)
  }
  return res;
};

console.log(shortestToChar('loveleetcode', 'e')); // [3,2,1,0,1,0,0,1,2,2,1,0]
console.log(shortestToChar('aaab', 'b')); // [3,2,1,0]
console.log(shortestToChar('abaa', 'b')); // [1,0,1,2]
console.log(shortestToChar('baaa', 'b')); // [0,1,2,3]
