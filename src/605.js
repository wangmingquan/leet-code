/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let max = 0;
  let l = flowerbed.length;
  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    return true;
  }
  for (let i = 0; i < l; i++) {
    if (i === 0) {
      if (flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
        flowerbed[i] = 1;
        max++;
      }
    } else if (i === l - 1) {
      if (flowerbed[i] === 0 && flowerbed[i - 1] === 0) {
        flowerbed[i] = 1;
        max++;
      }
    } else {
      if (
        flowerbed[i - 1] === 0
        && flowerbed[i] === 0
        && flowerbed[i + 1] === 0
      ) {
        flowerbed[i] = 1;
        max++;
      }
    }
  }
  return max >= n;
};
