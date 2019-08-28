/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function(stones) {
  if (stones.length === 1) {
    return stones[0];
  }
  stones.sort((a, b) => b - a);
  while (stones.length > 1) {
    if (stones[0] === stones[1]) {
      stones.splice(0, 2);
    } else {
      stones.splice(0, 2, stones[0] - stones[1]);
      stones.sort((a, b) => b - a);
    }
  }

  return stones.length === 1 ? stones[0] : 0;
};

console.log(lastStoneWeight([1, 2, 3, 4, 5])); // 1
console.log(lastStoneWeight([2, 2, 2, 2, 2, 2])); // 0
console.log(lastStoneWeight([5, 10, 123, 10])); // 98
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // 1
console.log(lastStoneWeight([7, 6, 7, 6, 9])); // 3

