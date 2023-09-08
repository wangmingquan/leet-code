/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  this.init = init;
  this.val = this.init;
  this.increment = () => {
    this.val++;
    return this.val;
  }
  this.decrement = () => {
    this.val--;
    return this.val;
  }
  this.reset = () => {
    this.val = this.init;
    return this.val;
  }
  return this;
};


const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

