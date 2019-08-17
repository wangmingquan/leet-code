/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let map = new Map();
let i = 0;
var encode = function (longUrl) {
  map.set(i + '', longUrl);
  let rst = `http://tinyurl.com/${i}`;
  i++;
  return rst;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  let key = shortUrl.replace('http://tinyurl.com/', '');
  return map.get(key);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
