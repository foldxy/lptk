const LP = require('@lptk/book')
const T = require('@lptk/translator').factory()

const sum = (a, b) => a + b

const extender = word => ({
    runic: word,
    latin: T.toLatin(word, true),
    positionTotal: T.toPositions(word).reduce(sum, 0),
    primeTotal: T.toPrimes(word).reduce(sum, 0),
    totientTotal: T.toTotients(word).reduce(sum, 0),
})

const extended = LP.pageWords()[20].map(extender)

console.table(extended)
