// gronsfeld test
const Ciphers = require('../../index')

function test() {
  const cipher = new Ciphers.Gronsfeld([4,5,3,2,9])

  var input = 'DEFENDTHEEASTWALLOFTHECASTLE';

  var expected = 'HJIGWHYKGNEXWYJPQRHCLJFCBXQH'

  var enc = cipher.encipher(input);

  var dec = cipher.decipher(enc);

  if (input === dec && enc === expected) {
    console.log('Gronsfeld', 'Test Passed.')
  } else{
    console.error('Gronsfeld', 'Test Failed.')
  }
  console.log(input, enc, dec, enc === expected, input === dec)
}

module.exports = test;