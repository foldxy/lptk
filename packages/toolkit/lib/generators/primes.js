// Sum of the first N Prime numbers
const sieve = require('./sieve-of-eratosthenes');

const primes = function(count, sieveSize = 10000) {
  const sieveResults = sieve(sieveSize);
  // console.log(sieveResults);
  let primes = []
  for (let i = 1;i < sieveResults.length; i++) {
    if (sieveResults[i]) {
      primes.push(i);
    }
  }
  return primes.slice(0,count);
}

module.exports = primes;