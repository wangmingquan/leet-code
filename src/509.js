/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  let results = [0, 1];
  if (N >= 2) {
    for (let i = 2; i <= N; i++) {
      results[i] = results[i - 1] + results[i - 2];
    }
  }
  return results[N];
};
