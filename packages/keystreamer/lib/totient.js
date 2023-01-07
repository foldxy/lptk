// lib/totient.js
//
// Euler's Totient Function 
const gcd = require('./ops/gcd')
const primes = require('./primes')

const phi = function (n) {
  result = 1;
  for (i = 2; i < n; i++) {
    if (gcd(i, n) == 1) {
      result++
    }
  }
  return result
}

const stream = function (length, start = 1) {
  const values = []
  for (var n = start, len = n + length; n < len; n++) {
    values.push(phi(n))
  }
  return values
}

const streamPrimes = function (length, offset = 0) {
  const primestream = primes.stream(length, offset)
  const values = []
  for (var n = 0; n < length; n++) {
    values.push(phi(primestream[n]))
  }
  return values
}

module.exports = {
  phi,
  stream,
  streamPrimes
}