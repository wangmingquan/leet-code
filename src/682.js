/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let scores = [];
  let sum = 0;
  for (let i = 0, l = ops.length; i < l; i++) {
    let item = ops[i];
    let scoresLen = scores.length;
    if (item === '+') {
      let current = scores[scoresLen - 1] + scores[scoresLen - 2];
      scores.push(current);
      sum += current;
    } else if (item === 'C') {
      sum -= scores[scoresLen - 1];
      scores.splice(scoresLen - 1, 1);
    } else if (item === 'D') {
      let current = scores[scoresLen - 1] * 2;
      scores.push(current);
      sum += current;
    } else {
      scores.push(Number(ops[i]));
      sum += Number(ops[i]);
    }
  }
  return sum;
};
