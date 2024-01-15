/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  const targetStrCode = target.charCodeAt();
  let result = letters[0];
  for (let i = 0, l = letters.length; i < l; i++) {
    const cur = letters[i]
    const curCode = cur.charCodeAt();
    if (curCode > targetStrCode) {
      result = cur;
      break;
    }
  }
  return result;
};

console.log(nextGreatestLetter(["c", "f", "j"], "a")); // "c"
console.log(nextGreatestLetter(["c", "f", "j"], "c")); // "f"
console.log(nextGreatestLetter(["x", "x", "y", "y"], "z")); // "x"
console.log(nextGreatestLetter(["e", "e", "e", "e", "e", "e", "n", "n", "n", "n"], "h")); // "n"


