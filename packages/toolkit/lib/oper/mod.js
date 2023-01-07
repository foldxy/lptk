// mod.js
//
// 
const mod = function (n, len = 29) {
  n = n % len
  if (n < 0) {
    n = n + (len);
  }
  return n;
}

module.exports = mod;