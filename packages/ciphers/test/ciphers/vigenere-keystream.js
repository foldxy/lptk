// vigenere test
const Ciphers = require('../../index')
var alphabet = Ciphers.alphabets.en();

function test() {
  var key = 'FORTIFICATION';

  var keystream = key.split('').map(x=>alphabet.indexOf(x));

  const cipher = new Ciphers.VigenereKeystream(keystream)

  var input = 'DEFENDTHEEASTWALLOFTHECASTLE';

  var expected = 'ISWXVIBJEXIGGBOCEWKBJEVIGGQS'

  var enc = cipher.encipher(input);

  var dec = cipher.decipher(enc);

  if (input === dec && enc === expected) {
    console.log('Vigenere - Keystream Variant', 'Test Passed.')
  } else{
    console.error('Vigenere - Keystream Variant', 'Test Failed.')
  }
  console.log(input, enc, dec, enc === expected, input === dec)
}

module.exports = test;