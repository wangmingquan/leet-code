/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let index = 0;
  let arr = [0, 1];
  this.next = () => {
    index++;
    if (arr[index - 1] !== undefined) {
      return arr[index - 1];
    } else {
      const value = arr[index - 2] + arr[index - 3];
      arr.push(value);
      return value;
    }
  };
  while(true) {
    yield this.next();
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
