// atbash/index.js
const dabet = require('../../alphabets').defacto()

class Atbash {

  constructor(alphabet = dabet) {
    this.a = alphabet;
    this.b = alphabet.map(x => x).reverse()
  }

  encipher(plaintext) {
    var out = '';
    for (var i = 0; i < plaintext.length; i++) {
      var idx = this.a.indexOf(plaintext[i])
      if (idx !== -1) {
        out += this.b[idx]
      } else {
        out += plaintext[i]
      }
    }
    return out;
  }

  decipher(ciphertext) {
    var out = '';
    for (var i = 0; i < ciphertext.length; i++) {
      var idx = this.b.indexOf(ciphertext[i])
      if (idx !== -1) {
        out += this.a[idx]
      } else {
        out += ciphertext[i]
      }
    }
    return out;
  }
}

module.exports = Atbash;