// beaufort/index.js
const dabet = require('../../alphabets').defacto()
const tabula = require('../../utils/tabula-recta')

class Beaufort {

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
      var ci = this.idx(p[i]);
      var ri = this.tabula[ci].indexOf(k[i % k.length]);
      out += this.tabula[ri][0];
    }
    return out;
  }

  decipher(ciphertext) {
    var c = ciphertext;
    var k = this.keyword;
    var out = '';
    for (var i = 0, len = ciphertext.length; i < len; i++) {
      var ri = this.idx(c[i]);
      var ci = this.tabula[ri].indexOf(k[i % k.length]);
      out += this.a[ci];
    }
    return out;
  }

  idx(letter) {
    return this.a.indexOf(letter);
  }
}

module.exports = Beaufort;