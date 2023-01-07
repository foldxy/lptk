// atbash test
const Ciphers = require('../../index')

function test() {
  const cipher = new Ciphers.Affine()

  var input = 'DEFENDTHEEASTWALLOFTHECASTLE';
  var a = 5;
  var b = 8;
  var enc = cipher.encipher(input, a, b);
  var dec = cipher.decipher(enc, a, b);

  if (input === dec) {
    console.log('Affine', 'Test Passed.')
  } else {
    console.error('Affine', 'Test Failed.')
  }
  console.log(input, enc, dec, input === dec)
}

module.exports = test;
