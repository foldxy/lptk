const LP = require('@lptk/book')
const T = require('@lptk/translator').factory()
const W = require('@lptk/whypto')
const { primes, totient } = require('@lptk/keystreamer')

// const ps = primes.stream(20,0, 500)
// console.log(ps)
// console.log(totient.streamPrimes(20, 0))


const ct = LP.pages()[71]
const w = W.factory(ct)

const key = totient.streamPrimes(500).map(n => n -1)

// console.log(key)
// console.log(w.ciphertext)
// console.log(w.toLatin(true))
const out = w
    .vigenereStream(key, [76])
    
    .toLatin(true)


console.log(out)