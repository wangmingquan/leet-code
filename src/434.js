/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  s = s.trim().replace(/\s+/g, ' ');
  if (s === '' || s === ' ') return 0;
  return s.split(' ').length;
};

console.log(countSegments("Hello, my name is John"));
