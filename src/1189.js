/**
 * @param {string} text
 * @return {number}
 */

var maxNumberOfBalloons = function(text) {
  let textLetter = text.split('');
  let balloonCount = 0;
  let balloon = 'balloon'.split('');
  let hasBallon = true;
  while (hasBallon) {
    for (let i = 0, l = balloon.length; i < l; i++) {
      let index = textLetter.indexOf(balloon[i]);
      if (index >= 0) {
        textLetter.splice(index, 1);
      } else {
        hasBallon = false;
        break;
      }
    }
    if (hasBallon) {
      balloonCount++;
    }
  }
  return balloonCount;
};

// test case
console.log(maxNumberOfBalloons('nlaebolko')); // 1
console.log(maxNumberOfBalloons('loonbalxballpoon')); // 2
console.log(maxNumberOfBalloons('leetcode')); // 0
