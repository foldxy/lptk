// porta test
const Ciphers = require('../../index')

function test() {
  const cipher = new Ciphers.Porta('FORTIFICATION')

  var input = 'DEFENDTHEEASTWALLOFTHECASTLE';

  var expected = 'SYNNJSCVRNRLAHUTUKUCVRYRLANY'

  var enc = cipher.encipher(input);

  var dec = cipher.decipher(enc);

  if (input === dec && enc === expected) {
    console.log('Porta', 'Test Passed.')
  } else{
    console.error('Porta', 'Test Failed.')
  }
  console.log(input, enc, dec, enc === expected, input === dec)
}

module.exports = test;