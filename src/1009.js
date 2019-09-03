/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  let S = Number(N).toString(2);
  let exS = '';
  for (let i = 0, l = S.length; i < l; i++) {
    exS += S[i] === '0' ? 1 : 0;
  }
  return parseInt(exS, 2);
};

// testCase
console.log(bitwiseComplement(5));
console.log(bitwiseComplement(7));
console.log(bitwiseComplement(10));
