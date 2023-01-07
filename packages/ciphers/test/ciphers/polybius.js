// Polybius test
const Ciphers = require('../../index')

function test() {
  const cipher = new Ciphers.Polybius('ZEBRA')

  var input = 'DEFENDTHEEASTWALLOFTHECASTLE';

  var expected = 'BBABBCABCEBBDEBEABABAEDDDEECAECCCCDABCDEBEABBAAEDDDECCAB'

  var enc = cipher.encipher(input);

  var dec = cipher.decipher(enc);

  if (input === dec && enc === expected) {
    console.log('Polybius', 'Test Passed.')
  } else{
    console.error('Polybius', 'Test Failed.')
  }
  console.log(input, enc, dec, enc === expected, input === dec)
}

module.exports = test;