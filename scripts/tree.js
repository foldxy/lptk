const LP = require('@lptk/book')
const GP = require('@lptk/gematria-primus').factory()
const T = require('@lptk/translator').factory()
const W = require('@lptk/whypto')
const t = require("theorem.js");

const runeArray = GP.runeArray();

// const page = LP.pages()[25]
// const pageRunes = LP.pages()[25].replace(/\/|\n|-|\./g, '')
const page = LP.sections()[9]
// const pageRunes = LP.sections()[9].replace(/\/|\n|-|\./g, '')
const pageRunes = LP.sections()[9].replace(/\/|\n/g, '')
// console.log(pageRunes)

function codebookToMap(codebook) {
   return  Object.entries(codebook)
    .map(([k,v]) => [k, parseInt(v, 2)])
    .reduce((a,[k,v]) => {
        a[k] = v
        return a
    }, {})
}

// console.log(page)

const encoded = t.huffmanEncode(pageRunes);

console.log(Object.keys(encoded.codebook).length)

const map = codebookToMap(encoded.codebook)
console.log(map)

// const key = pageRunes.split('')
//     .map(r => GP.rune(r).prime * map[r])
//     // .map(r => runeArray.indexOf(r) * map[r])
//     // .map(bin => parseInt(bin, 2))
//     // .map(n => n % 29)
// console.log(key)

// // const key = pageRunes.split('')
// //     .map(r => map[r])
// //     .map(n => n % 29)
// // console.log(key)

// const w = new W(page);

// console.log(w.clone().vigenereStream(key, [], false).toLatin(true))