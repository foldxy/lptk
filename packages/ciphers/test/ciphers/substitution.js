// substitution test
const Ciphers = require('../../index')

function test() {
  const cipher = new Ciphers.Substitution('ZEBRA')

  var input = 'DEFENDTHEEASTWALLOFTHECASTLE';

  var expected = 'RACALRSFAAZQSVZJJMCSFABZQSJA'

  var enc = cipher.encipher(input);

  var dec = cipher.decipher(enc);

  if (input === dec && enc === expected) {
    console.log('Substitution', 'Test Passed.')
  } else {
    console.error('Substitution', 'Test Failed.')
  }
  console.log(input, enc, dec, enc === expected, input === dec)
}

module.exports = test;