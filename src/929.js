/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let rem = new Set();
  for (let item of emails) {
    let local = item.split('@')[0];
    if (local.indexOf('.')) {
      local = local.replace(/\./g, '');
    }
    if (local.indexOf('+')) {
      local = local.substr(0, local.indexOf('+'));
    }
    rem.add(local + '@' + item.split('@')[1]);
  }
  return rem.size;
};
