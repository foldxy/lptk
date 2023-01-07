const T = require('@lptk/translator').factory()
const wordlist = require('@lptk/wordlists/wordlists/english/wordlist')

const sum = (a, b) => a + b

const expanded = wordlist.map(word => ({
    runic: word,
    latin: T.toLatin(word, true),
    positionTotal: T.toPositions(word).reduce(sum, 0),
    primeTotal: T.toPrimes(word).reduce(sum, 0),
    totientTotal: T.toTotients(word).reduce(sum, 0),
}))

const POSITION = "position"
const PRIME = "prime"
const TOTIENT = "totient"
const ANY = "any"

const applyLense = (lense, value) => {
    switch (lense) {
        case POSITION:
            return ({ positionTotal }) => {
                return positionTotal === value
            }
        case PRIME:
            return ({ primeTotal }) => {
                return primeTotal === value
            }
        case TOTIENT:
            return ({ totientTotal }) => {
                return totientTotal === value
            }
        default:
            return ({ positionTotal, primeTotal, totientTotal }) => {
                return positionTotal === value || primeTotal === value || totientTotal === value
            }
    }
}

const applyRunicLength = (length) => {
    return ({ runic }) => runic.length === length
}
const applyMaxRunicLength = (length) => {
    return ({ runic }) => runic.length <= length
}
const applyMinRunicLength = (length) => {
    return ({ runic }) => runic.length >= length
}

const applySort = (sort) => {
    return (a, b) => a.latin.localeCompare(b.latin)
}

// [ lense, value, runicLength]
[
    // [PRIME, 110, 2],
    // [PRIME, 487, 11],
    // [PRIME, 145, 3],
    // [PRIME, 124, 4],
    // [PRIME, 395, 7],
    // [PRIME, 430, 7],
    // [PRIME, 457, 7],
    // [PRIME, 354, 4],
    // [PRIME, 290, 6],
    // [PRIME, 573, 12],
    [PRIME, 79, 0],
    // [PRIME, 533, 9],


].forEach(([ lense, value, length ], i) => {
    console.group(`${i}: ${lense} value: ${value}, length: ${length}`)
    let filtered = expanded.filter(applyLense(lense, value))

    if (length > 0) {
        filtered = filtered.filter(applyRunicLength(length))
    }

    console.table(filtered)
    console.groupEnd()
})




// const filtered = expanded
//     .filter(applyLense(PRIME, 145))
//     // .filter(applyRunicLength(2))

// const sorted = filtered//.sort(applySort())

// console.table(sorted)

console.log(expanded.filter(({latin}) => latin === 'BRANCHES'))
