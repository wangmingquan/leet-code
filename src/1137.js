// Tn+3 = Tn + Tn+1 + Tn+2
var tribonacci = function(n) {
  let cache = [0, 1, 1];
  if (n < 3) {
    return cache[n];
  }
  for (let i = 3; i <= n; i++) {
    let tn = cache[i - 1] + cache[i - 2] + cache[i - 3];
    cache.push(tn);
  }
  return cache[n];
};

console.log(tribonacci(4));
console.log(tribonacci(25));
