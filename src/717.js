/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  let l = bits.length;
  let is1bite = false;
  for (let i = 0; i < l; i++) {
    if (bits[i] === 1) {
      i++;
      continue;
    }
    if (i + 1 === l && bits[i] === 0) {
      is1bite = true;
    }
  }
  return is1bite;
};
