var numSpecialEquivGroups = function (A) {
  let set = new Set();
  for (let item of A) {
    if (item.lenth === 1) {
      set.add(item);
    } else {
      let oddStr = [];
      let evenStr = [];
      let arr = item.split('');
      for (let i = 0, l = arr.length; i < l; i++) {
        if (i % 2 === 1) {
          oddStr.push(arr[i]);
        } else {
          evenStr.push(arr[i]);
        }
      }
      oddStr.sort();
      evenStr.sort();
      set.add(`${oddStr.join('')}${evenStr.join('')}`);
    }
  }
  return set.size;
};
