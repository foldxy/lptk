// affine/index.js
const dabet = require('../../alphabets').defacto()
const indexMod = require('../../utils/index-mod')

class Affine {

  constructor(alphabet = dabet) {
    this.a = alphabet.join('');
  }

  encipher(plaintext, a, b) {
    var out = ''
    for (var i = 0; i < plaintext.length; i++) {
      var idx = this.a.indexOf(plaintext[i])
      if (idx !== -1) {
        out += this.a[indexMod((a * idx + b) % this.a.length, this.a.length)]
      } else {
        out += plaintext[i]
      }
    }
    return out
  }

  decipher(ciphertext, a, b) {
    var out = ''
    for (var i = 0; i < ciphertext.length; i++) {
      var idx = this.a.indexOf(ciphertext[i])
      if (idx !== -1) {
        out += this.a[indexMod((((this.a.length - a) * (idx - b)) % this.a.length), this.a.length)]
      } else {
        out += ciphertext[i]
      }
    }
    return out
  }

}

module.exports = Affine;
