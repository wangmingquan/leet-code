/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  const maxFactor = Math.floor(Math.sqrt(area));
  let wls = [];
  for (let i = maxFactor; i >= 1; i--) {
    const l = area / i;
    if (Number.isInteger(l)) {
      wls = [l, i];
      break;
    }
  }
  return wls;
};

console.log(constructRectangle(1)); // [1,1]
console.log(constructRectangle(2)); // [2,1]
console.log(constructRectangle(4)); // [2,2]
console.log(constructRectangle(37)); // [37, 1]
console.log(constructRectangle(122122)); // [427,286]
