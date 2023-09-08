/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineStrs = magazine.split('');
  for (let i = 0, l = ransomNote.length; i < l; i++) {
    const index = magazineStrs.indexOf(ransomNote[i]);
    if (index < 0) {
      return false;
    }
    magazineStrs.splice(index, 1);
  }
  return true;
};
