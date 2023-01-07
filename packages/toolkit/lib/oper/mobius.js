// mobius.js
const PF = require('primes-and-factors');

const mobius = function (val) {
  const pf = PF.getFactors(val);
  const upf = PF.getUniqueFactors(val);

  if (pf.length > upf.length) return 0;
  if (pf.length % 2 === 0) return 1;
  return -1
}

const stream = function (start = 1, length = 100) {
  const values = [];
  for (var n = start, len = n + length; n <= len; n++) {
    values.push([n, mobius(n)]);
  }
  return values;
}

module.exports = {
  mobius,
  stream
};