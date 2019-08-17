/**
 * @see https://leetcode-cn.com/problems/defanging-an-ip-address/
 * @param {string} address address
 * @return {string} address
 */
var defangIPaddr = function (address) {
  return address.replace(/\./g, '[.]');
};

// test case
console.log(defangIPaddr('1.1.1.1')); // 1[.]1[.]1[.]1
