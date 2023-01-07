// lib/mobius.js
const PF = require('primes-and-factors')
const primes = require('./primes')

const mobius = function (val) {
  const pf = PF.getFactors(val)
  const upf = PF.getUniqueFactors(val)

  if (pf.length > upf.length) return 0
  if (pf.length % 2 === 0) return 1
  return -1
}

const stream = function (length, start = 1) {
  const values = [];
  for (var n = start, len = n + length; n <= len; n++) {
    values.push(mobius(n))
  }
  return values
}

const streamPrimes = function (length, offset = 0) {
  const primestream = primes.stream(length, offset)
  const values = []
  for (var n = 0; n < length; n++) {
    values.push(mobius(primestream[n]))
  }
  return values
}

module.exports = {
  mobius,
  stream,
  streamPrimes
};