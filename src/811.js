/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  let visitedMap = new Map();
  for (let item of cpdomains) {
    let obj = item.split(' ');
    let num = parseInt(obj[0]);
    let domains = obj[1].split('.');
    for (let i in domains) {
      let key = domains.slice(i).join('.');
      if (visitedMap.has(key)) {
        visitedMap.set(key, visitedMap.get(key) + num);
      } else {
        visitedMap.set(key, num);
      }
    }
  }
  let arr = [];
  visitedMap.forEach((value, key) => {
    arr.push(`${value} ${key}`);
  });
  return arr;
};
