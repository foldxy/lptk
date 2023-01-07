// runningkey test
const Ciphers = require('../../index')

function test() {
  const cipher = new Ciphers.Runningkey('HOWDOESTHEDUCKKNOWTHATSAIDVI')

  var input = 'DEFENDTHEEASTWALLOFTHECASTLE';

  var expected = 'KSBHBHLALIDMVGKYZKYAHXUAAWGM'

  var enc = cipher.encipher(input);

  var dec = cipher.decipher(enc);

  if (input === dec && enc === expected) {
    console.log('Runningkey', 'Test Passed.')
  } else{
    console.error('Runningkey', 'Test Failed.')
  }
  console.log(input, enc, dec, enc === expected, input === dec)
}

module.exports = test;