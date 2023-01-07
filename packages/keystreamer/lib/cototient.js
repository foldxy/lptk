// lib/cototient.js

const { phi } = require('./totient');
const primes = require('./primes')

const cototient = function (n) {
  return n - phi(n)
}

const stream = function (length, start = 1) {
  var len = start + length;
  const values = []
  for (var n = start; n < len; n++) {
    values.push(cototient(n))
  }
  return values
}

const streamPrimes = function (length, offset = 0) {
  const primestream = primes.stream(length, offset)
  const values = []
  for (var n = 0; n < length; n++) {
    values.push(cototient(primestream[n]))
  }
  return values
}

module.exports = {
  cototient,
  stream,
  streamPrimes
}