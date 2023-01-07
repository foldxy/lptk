const LP = require('@lptk/book')
const W = require('@lptk/whypto')
const T = require('@lptk/translator').factory()
const GP = require('@lptk/gematria-primus').factory()
const wordlist = require('@lptk/wordlists/wordlists/english/wordlist')

const sum = (a, b) => a + b

const expanded = LP.pageWords()[20].map(word => ({
    runic: word,
    latin: T.toLatin(word, true),
    positionTotal: T.toPositions(word).reduce(sum, 0),
    primeTotal: T.toPrimes(word).reduce(sum, 0),
    totientTotal: T.toTotients(word).reduce(sum, 0),
}))

console.table(expanded)

// const POSITION = "position"
// const PRIME = "prime"
// const TOTIENT = "totient"

// const applyLense = (lense, value) => {
//     switch (lense) {
//         case POSITION:
//             return ({ positionTotal }) => {
//                 return positionTotal === value
//             }
//         case PRIME:
//             return ({ primeTotal }) => {
//                 return primeTotal === value
//             }
//         case TOTIENT:
//             return ({ totientTotal }) => {
//                 return totientTotal === value
//             }
//         default:
//             return ({ positionTotal, primeTotal, totientTotal }) => {
//                 return positionTotal === value || primeTotal === value || totientTotal === value
//             }
//     }
// }

// const applySort = (sort) => {
//     return (a, b) => a.latin.localeCompare(b.latin)
// }

// const filtered = expanded.filter(applyLense(PRIME, 138))

// const sorted = filtered//.sort(applySort())

// console.table(sorted)