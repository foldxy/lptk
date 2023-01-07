// caesar test
const Ciphers = require('../../index')

function test() {
  const cipher = new Ciphers.Caesar()

  var input = 'AAAABBBB';
  var expected = 'YYYYZZZZ'
  var shift = -2
  var enc = cipher.encipher(input, shift);
  var dec = cipher.decipher(enc, shift);

  if (input === dec && enc == expected) {
    console.log('Caesar', 'Test Passed.')
  } else{
    console.error('Caesar', 'Test Failed.')
  }
  console.log(input, enc, dec, input === dec)
}

module.exports = test;