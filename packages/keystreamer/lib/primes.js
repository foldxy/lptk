// lib/primes.js
const sieve = require('./generators/sieve-of-eratosthenes')

const primeAt = function(index, sieveSize = 10000) {
  const sieveResults = sieve(sieveSize)

  let primes = []
  for (let i = 1;i < sieveResults.length; i++) {
    if (sieveResults[i]) {
      primes.push(i)
    }
  }
  return primes.slice(offset, length)
}

const stream = function(length, offset = 0, sieveSize = 10000) {
  const sieveResults = sieve(sieveSize)

  let primes = []
  for (let i = 1;i < sieveResults.length; i++) {
    if (sieveResults[i]) {
      primes.push(i)
    }
  }
  console.log(primes)
  return primes.slice(offset, offset + length)
}

module.exports = {
  primeAt,
  stream
}