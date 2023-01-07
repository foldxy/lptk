// substitution/index.js
const dabet = require('../../alphabets').defacto();
const ka = require('../../utils/keyed-alphabet');

class Substitution {

  constructor(key, alphabet = dabet) {
    this.a = alphabet;
    this.b = ka(key,alphabet)
  }

  encipher(plaintext) {
    var out = '';
    for (var i = 0; i < plaintext.length; i++) {
      var idx = this.a.indexOf(plaintext[i]);
      out += this.b[idx];
    }
    return out;
  }

  decipher(ciphertext) {
    var out = '';
    for (var i = 0; i < ciphertext.length; i++) {
      var idx = this.b.indexOf(ciphertext[i]);
      out += this.a[idx];
    }
    return out;
  }
}

module.exports = Substitution;