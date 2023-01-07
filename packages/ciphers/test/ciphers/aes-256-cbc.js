// aes256cbc test
const Ciphers = require('../../index')

const input = 'DEFENDTHEEASTWALLOFTHECASTLE';

function test() {

  
  cipher()
  console.log('')
  cipheriv()

}

function cipher() {
  var cipher = new Ciphers.AES256CBC();
  var secret = "FORTIFICATION"
  var enc = cipher.encipheriv(input,secret);
  var dec = cipher.decipheriv(enc.data,secret);

  if (input === dec) {
    console.log('AES256CBC', 'Test Passed.')
  } else {
    console.error('AES256CBC', 'Test Failed.')
  }
  console.log(input, enc.data, dec, input === dec)
}

function cipheriv() {
  // Using Key and IV
  var key = '0123456789ABCDEF0123456789ABCDEF'
  var iv = '0123456789ABCDEF'
  var cipher = new Ciphers.AES256CBC(key, iv);
  var expected = 'vqeZuxvjCrtQbqTgT/xAO2WUrlvlG6itQWBkNEXZD5E='
  var enc = cipher.encipheriv(input);
  var dec = cipher.decipheriv(enc.data);

  if (input === dec && enc.data === expected) {
    console.log('AES256CBC w/ IV', 'Test Passed.')
  } else {
    console.error('AES256CBC w/ IV', 'Test Failed.')
  }
  console.log(input, enc.data, dec, enc.data === expected, input === dec)
}

module.exports = test;