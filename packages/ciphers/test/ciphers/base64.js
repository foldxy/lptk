// base64 test
const Ciphers = require('../../index')

function test() {
  const cipher = new Ciphers.Base64();

  var input = 'DEFENDTHEEASTWALLOFTHECASTLE';

  var expected = 'REVGRU5EVEhFRUFTVFdBTExPRlRIRUNBU1RMRQ=='

  var enc = cipher.encipher(input);

  var dec = cipher.decipher(enc);

  if (input === dec && enc === expected) {
    console.log('Base64', 'Test Passed.')
  } else {
    console.error('Base64', 'Test Failed.')
  }
  console.log(input, enc, dec, enc === expected, input === dec)
}

module.exports = test;