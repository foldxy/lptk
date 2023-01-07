module.exports = function (n, m=26) {
  n = n % m;
  return n < 0 ? n + m: n;
}