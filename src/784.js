/**
 * @description 784. 字母大小写全排列
 * @see https://leetcode-cn.com/problems/letter-case-permutation/
 * @param {string} S 输入
 * @return {string[]} 输出
 */
var letterCasePermutation = function (S) {
  let result = [];
  let sStrs = S.split('');
  for (let item of sStrs) {
    if (!/^\d$/.test(item)) {
      // 字母的情况
      let newResult = [];
      // 大小写互转
      let reverseLowerOrUpper = /[a-z]/.test(item)
        ? item.toLocaleUpperCase()
        : item.toLocaleLowerCase();
      if (result.length === 0) {
        newResult.push(item);
        newResult.push(reverseLowerOrUpper);
      }
      for (let i in result) {
        newResult.push(result[i] + item);
        newResult.push(result[i] + reverseLowerOrUpper);
      }
      result = newResult;
    } else {
      // 数字的情况
      if (result.length) {
        for (let i in result) {
          result[i] += item;
        }
      } else {
        result.push(item);
      }
    }
  }
  return result;
};
