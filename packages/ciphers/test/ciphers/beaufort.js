// beaufort test
const Ciphers = require('../../index')

function test() {
  const cipher = new Ciphers.Beaufort('FORTIFICATION')

  var input = 'DEFENDTHEEASTWALLOFTHECASTLE';

  var expected = 'CKMPVCPVWPIWUJOGIUAPVWRIWUUK'

  var enc = cipher.encipher(input);

  var dec = cipher.decipher(enc);

  if (input === dec && enc === expected) {
    console.log('Beaufort', 'Test Passed.')
  } else{
    console.error('Beaufort', 'Test Failed.')
  }
  console.log(input, enc, dec, enc === expected, input === dec)
}

module.exports = test;