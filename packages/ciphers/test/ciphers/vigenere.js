// vigenere test
const Ciphers = require('../../index')

function test() {
  const cipher = new Ciphers.Vigenere('FORTIFICATION')

  var input = 'DEFENDTHEEASTWALLOFTHECASTLE';

  var expected = 'ISWXVIBJEXIGGBOCEWKBJEVIGGQS'

  var enc = cipher.encipher(input);

  var dec = cipher.decipher(enc);

  if (input === dec && enc === expected) {
    console.log('Vigenere', 'Test Passed.')
  } else{
    console.error('Vigenere', 'Test Failed.')
  }
  console.log(input, enc, dec, enc === expected, input === dec)
}

module.exports = test;