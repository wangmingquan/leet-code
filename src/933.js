var RecentCounter = function () {
  this.times = [];
  this.len = 0;
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.times.push(t);
  this.len++;
  for (let i = 0; i < this.len; i++) {
    if (t - this.times[i] > 3000) {
      i--;
      this.len--;
      this.times.splice(0, 1);
    }
  }
  return this.len;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = Object.create(RecentCounter).createNew()
 * var param_1 = obj.ping(t)
 */
