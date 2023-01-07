// autokey test
const Ciphers = require('../../index')

function test() {
  const cipher = new Ciphers.Autokey('FORTIFICATION')

  var input = 'DEFENDTHEEASTWALLOFTHECASTLE';

  var expected = 'ISWXVIBJEXIGGZEQPBIMOIGAKMHE'

  var enc = cipher.encipher(input);

  var dec = cipher.decipher(enc);

  if (input === dec && enc === expected) {
    console.log('Autokey', 'Test Passed.')
  } else{
    console.error('Autokey', 'Test Failed.')
  }
  console.log(input, enc, dec, enc === expected, input === dec)
}

module.exports = test;