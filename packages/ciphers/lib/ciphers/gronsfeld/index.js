// vigenere/index.js
const dabet = require('../../alphabets').defacto()
const tabula = require('../../utils/tabula-recta')

class Vigenere {

  constructor(key, alphabet = dabet) {
    this.a = alphabet;
    this.key = key;
    this.tabula = tabula(alphabet);
  }

  encipher(plaintext) {
    var p = plaintext.toUpperCase().replace(/\.|\/|,|-|\s|:|\\|'/g, '');
    var k = this.key;
    var out = '';
    for (var i = 0, len = p.length; i < len; i++) {
      var ci = this.idx(p[i]);
      var ri = k[i % k.length];
      out += this.tabula[ri][ci]
    }
    return out;
  }

  decipher(ciphertext) {
    var c = ciphertext;
    var k = this.key;
    var out = '';
    for (var i = 0, len = c.length; i < len; i++) {
      var ri = k[i % k.length];
      var ci = this.tabula[ri].indexOf(c[i]);
      var letter = this.a[ci];
      out += letter;
    }
    return out;
  }

  idx(letter) {
    return this.a.indexOf(letter);
  }
}

module.exports = Vigenere;