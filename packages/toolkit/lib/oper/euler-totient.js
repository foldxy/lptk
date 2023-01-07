// Euler's Totient Function 
const gcd = require('./gcd');

// A simple method to evaluate Euler Totient Function 
const phi = function (n) {
  result = 1;
  for (i = 2; i < n; i++) {
    if (gcd(i, n) == 1) {
      result++;
    }
  }
  return result;
}

const stream = function (start = 1, length = 100) {
  const values = [];
  for (var n = start, len = n + length; n < len; n++) {
    values.push([n, phi(n)]);
  }
  return values;
}

module.exports = {
  phi,
  stream
}