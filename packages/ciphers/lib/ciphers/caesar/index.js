// caesar/index.js
const dabet = require('../../alphabets').defacto()
const indexMod = require('../../utils/index-mod')


class Caesar {

  constructor(alphabet = dabet) {
    this.a = alphabet.join('');
  }

  encipher(plaintext, shift) {
    
    var out = '';
    for (var i = 0; i < plaintext.length; i++) {
      var idx = this.a.indexOf(plaintext[i])
      if (idx !== -1) {
        out += this.a[indexMod(idx + shift, this.a.length)]
      } else {
        out += plaintext[i]
      }
      
    }
    return out;
  }

  decipher(ciphertext, shift) {
    var out = '';
    for (var i = 0; i < ciphertext.length; i++) {
      var idx = this.a.indexOf(ciphertext[i])
      if (idx !== -1) {
        out += this.a[indexMod(idx - shift, this.a.length)]
      } else {
        out += ciphertext[i]
      }
      
    }
    return out;
  }
}

module.exports = Caesar;