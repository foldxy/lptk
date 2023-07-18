const LP = require('@lptk/book')
const GP = require('@lptk/gematria-primus')
const T = require('@lptk/translator').factory()
const W = require('@lptk/whypto')
const PowerRadix = require('power-radix')

// const b60 = positions
//     .map(n => new PowerRadix(n, 10).toString(60))
//     .map(n => String('0'+n).slice(-2).split('').reverse().join(''))
//     .map(n => Number(new PowerRadix(n, 60).toString(10)))
//     // .map(n => n % 29)



// console.log(b60)

// console.log(T.toLatin(T.fromPositions(b60)))
const n = 1033
const q = Math.floor(n / 60)
const r = n % 60

// console.log(q, r)

function revnum(n) {
    return Number(String(n).split('').reverse().join(''))
}

function convertToSet(n) {
    const q = Math.floor(n / 60)
    const r = n % 60
    return `${q} ${r}`
}
function convert(n) {
    const q = Math.floor(n / 60)
    const r = n % 60
    const m = `${q}${r}`
    return Number(m)
}

// function convert(n) {
//     const q = Math.floor(n / 60)
//     const r = n % 60
//     const m = q+r;//`${q}${r}`
//     return Number(m)
// }


console.log(n, convertToSet(n), convert(n), convert(n) % 29)
console.log(revnum(n), convertToSet(revnum(n)), convert(revnum(n)), convert(revnum(n)) % 29)
console.log(
    convert(n),
    convert(revnum(n)),
    Math.abs(convert(n) - convert(revnum(n))),
    Math.abs(convert(n) - convert(revnum(n))) % 29,
    convert(Math.abs(convert(n) - convert(revnum(n))))
)



//////////////


const page = LP.pages()[51].replace(/\/|\n/g, '')

const p = T.toPrimes(page)
const pos = T.toPositions(page)
const k = p.map((n,i) => n + pos[i])
console.log(p.join())

// const key = [39, 49]
// const key = p.map(n => convert(revnum(n)))
const key = p.map(n => convert(n))
// const key = p.map(n => convert(n) - convert(revnum(n)))
// const key = p.map(n => convert(Math.abs(convert(n) - convert(revnum(n)))))


console.log(key)
// console.log(T.toLatin(T.fromPositions(key)))


const w = W.factory(page)

// console.log(w.clone().vigenereStream(key, [], false).atbash().toLatin().join())
console.log(w.clone().vigenereStream(key, [], true).atbash().toLatin().join())
// console.log(w.clone().vigenereStream(key, [], false).toLatin())
// console.log(w.clone().vigenereStream(key, [], true).toLatin())