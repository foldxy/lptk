// rot13 test
const Ciphers = require('../../index')

function test() {
  const cipher = new Ciphers.ROT13()

  var input = 'AAAABBBB';
  var expected = 'NNNNOOOO'
  var shift = -2
  var enc = cipher.encipher(input, shift);
  var dec = cipher.decipher(enc, shift);

  if (input === dec && enc == expected) {
    console.log('ROT13', 'Test Passed.')
  } else{
    console.error('ROT13', 'Test Failed.')
  }
  console.log(input, enc, dec, input === dec)
}

module.exports = test;