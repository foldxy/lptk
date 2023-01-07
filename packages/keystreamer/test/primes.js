const KS = require('../index')

console.log(KS.primes.stream(5).join())
console.log(KS.primes.stream(5,5).join())