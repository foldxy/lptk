// utils > tabula-recta test
const tabula = require('../../lib/utils/tabula-recta')
const dabet = require('../../lib/alphabets')

function test() {
 console.table(tabula(dabet.defacto()));

  // if (input === dec && enc == expected) {
  //   console.log('Test Passed.')
  // } else{
  //   console.error('Test Failed.')
  // }
  // console.log(input, enc, dec, input === dec)
}

module.exports = test;