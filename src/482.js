/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  const newS = s.toUpperCase().split('-').join('');
  const firstL = newS.length % k;
  const newArr = [];
  if (firstL > 0) {
    newArr.push(newS.substr(0, firstL));
  }
  for (let i = firstL, l = newS.length; i < l; i += k) {
    newArr.push(newS.substring(i, i + k));
  }
  return newArr.join('-');
};


console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4)); // "5F3Z-2E9W"
console.log(licenseKeyFormatting('2-5g-3-J', 2)); // "2-5G-3J"
