/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
  let num = 0;
  for (let i = 1; i <= N; i++) {
    let _i = ('' + i).split('');
    let flag = true;
    for (let j = 0, l = _i.length; j < l; j++) {
      if (_i[j] === '2') {
        _i[j] = 5;
      } else if (_i[j] === '5') {
        _i[j] = 2;
      } else if (_i[j] === '6') {
        _i[j] = 9;
      } else if (_i[j] === '9') {
        _i[j] = 6;
      } else if (['0', '1', '8'].indexOf(_i[j]) < 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      _i = parseInt(_i.join(''));
      if (_i !== i) {
        num++;
      }
    }
  }
  return num;
};
