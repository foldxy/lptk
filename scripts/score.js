const LP = require('@lptk/book')
const T = require('@lptk/translator').factory()
const W = require('@lptk/whypto')
const { primes, totient } = require('@lptk/keystreamer')

// const ps = primes.stream(20,0, 500)
// console.log(ps)
// console.log(totient.streamPrimes(20, 0))


const ct = LP.book()
const w = W.factory(ct)



w.score()
