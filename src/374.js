/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1, right = n;
  while (left < right) {
    const middle = Math.floor(left + (right - left) / 2);
    const res = guess(middle);
    if (res === 1) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return left;
};

// test
let pick = 0;
function guess(number) {
  if (number < pick) return -1;
  if (number === pick) return 0;
  if (number > pick) return 1;
}
pick = 6; console.log(guessNumber(10));
pick = 1; console.log(guessNumber(1));
pick = 1; console.log(guessNumber(2));
pick = 2; console.log(guessNumber(2));

