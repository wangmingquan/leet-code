/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
  let arrA = [];
  for (let item of A) {
    arrA.push(item.split(''));
  }
  let publicArr = arrA[0];
  let newPublicArr = [];
  for (let i = 1, l = arrA.length; i < l; i++) {
    newPublicArr = [];
    for (let j = 0, jl = arrA[i].length; j < jl; j++) {
      let letter = arrA[i][j];
      if (publicArr.indexOf(letter) >= 0) {
        publicArr.splice(publicArr.indexOf(letter), 1);
        newPublicArr.push(letter);
      }
    }
    publicArr = newPublicArr;
  }
  return publicArr;
};
