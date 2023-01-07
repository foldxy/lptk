const wordlist = require('wordlist-english')
const generate = require('../generator')

console.log('// npm wordlist-english')
console.log('module.exports = [')
generate(wordlist['english/60']).forEach((x) => console.log('"' + x + '",'))
console.log(']')