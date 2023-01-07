// lib/index-mod.js
module.exports = function (n, m=29) {
  n = n % m;
  return n < 0 ? n + m: n;
}