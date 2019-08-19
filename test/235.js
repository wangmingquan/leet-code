let same = null;
let p = [6];
let q = [2, 6];
for (let i = 0, l = p.length; i < l; i++) {
  if (q.indexOf(p[i]) >= 0) {
    same = p[i];
    break;
  }
}

console.log(same);
