/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
  let len = queries.length;
  let answers = [];
  let answer = 0;

  for (let i = 0; i < len; i++) {
    let index = queries[i][1];
    let current = A[index];
    let newNum = queries[i][0];
    A[index] = current + newNum;
    if (!answers.length) {
      for (let item of A) {
        if (item % 2 === 0) {
          answer += item;
        }
      }
    } else {
      if (current % 2 === 0) {
        if (newNum % 2 === 0) {
          answer += newNum;
        } else {
          answer -= current;
        }
      } else if (current % 2 !== 0) {
        if (newNum % 2 !== 0) {
          answer += current + newNum;
        } else {
        }
      }
    }
    answers.push(answer);
  }
  return answers;
};
