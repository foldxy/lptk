// autokey/index.js
const dabet = require('../../alphabets').defacto()
const tabula = require('../../utils/tabula-recta')

class Runningkey {

  constructor(keyword, alphabet = dabet) {
    this.a = alphabet;
    this.keyword = keyword.toUpperCase();
    this.tabula = tabula(alphabet);
  }

  encipher(plaintext) {
    var p = plaintext.toUpperCase().replace(/\.|\/|,|-|\s|:|\\|'/g, '');
    var k = this.keyword;
    var out = '';
    for (var i = 0, len = p.length; i < len; i++) {
      var ri = this.idx(k[i]);
      var ci = this.idx(p[i])
      out += this.tabula[ri][ci]
    }
    return out;
  }

  decipher(ciphertext) {
    var c = ciphertext;
    var k = this.keyword;
    var out = '';
    for (var i = 0, len = ciphertext.length; i < len; i++) {
      var ri = this.idx(k[i]);
      var ci = this.tabula[ri].indexOf(ciphertext[i]);
      var letter = this.a[ci];
      out += letter;
    }
    return out;
  }

  idx(letter) {
    return this.a.indexOf(letter);
  }
}

module.exports = Runningkey;