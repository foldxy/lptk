// atbash test
const Ciphers = require('../../index')

function test() {
  const cipher = new Ciphers.Atbash()

  var input = 'AAAABBBB';
  var enc = cipher.encipher(input);
  var dec = cipher.decipher(enc);

  if (input === dec) {
    console.log('Atbash','Test Passed.')
  } else{
    console.error('Atbash','Test Failed.')
  }
  console.log(input, enc, dec, input === dec)
}

module.exports = test;