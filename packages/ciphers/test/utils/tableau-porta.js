// utils > tableau-porta test
const tableau = require('../../lib/utils/tableau-porta')
const dabet = require('../../lib/alphabets')

function test() {
 console.table(tableau(dabet.defacto()));

  // if (input === dec && enc == expected) {
  //   console.log('Test Passed.')
  // } else{
  //   console.error('Test Failed.')
  // }
  // console.log(input, enc, dec, input === dec)
}

module.exports = test;