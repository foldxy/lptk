const LP = require('@lptk/book')
const T = require('@lptk/translator').factory()
const W = require('@lptk/whypto')
const { totient } = require('@lptk/keystreamer')

const ct = LP.pages()[73]
const w = W.factory(ct)

const key = totient.streamPrimes(500)

const out = w
    .vigenereStream(key,[217])
    .toLatin(true)

console.log(out)