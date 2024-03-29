/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//   let map = {
//     '(': -1,
//     ')': 1,
//     '[': -2,
//     ']': 2,
//     '{': -3,
//     '}': 3
//   };
//   let stack = [];
//   for (let i = 0, l = s.length; i < l; i++) {
//     // 如果不包含括号，直接跪
//     if (!map[s[i]]) {
//       return false;
//     }
//     if (map[s[i]] < 0) {
//       stack.push(map[s[i]]);
//     } else {
//       let last = stack.pop();
//       console.log(last, map[s[i]]);
//       if (last + map[s[i]] !== 0) {
//         return false;
//       }
//     }
//   }
//   return stack.length > 0 ? false : true;
// };

// 解法二
var isValid = function (s) {
  const array = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  for (let i = 0, l = s.length; i < l; i++) {
    let first = array[0];
    let current = s[i];
    if (first && current === map[first]) {
      array.splice(0, 1);
    } else {
      array.unshift(current);
    }
  }
  return array.length === 0;
};
