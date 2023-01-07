// porta/index.js
const dabet = require('../../alphabets').defacto()
const tableau = require('../../utils/tableau-porta')

class Porta {

  constructor(keyword, alphabet = dabet) {
    this.a = alphabet;
    this.keyword = keyword.toUpperCase();
    this.tableau = tableau(alphabet);
    this.rowKeys = alphabet.join('').match(/.{1,2}/g)
  }

  encipher(plaintext) {
    var p = plaintext.toUpperCase().replace(/\.|\/|,|-|\s|:|\\|'/g, '');
    var k = this.keyword;
    var out = '';
    for (var i = 0, len = p.length; i < len; i++) {
      var ri = this.lookup(k[i % k.length]);
      var ci = this.idx(p[i])
      out += this.tableau[ri][ci]
    }
    return out;
  }

  decipher(ciphertext) {
    var c = ciphertext;
    var k = this.keyword;
    var out = '';
    for (var i = 0, len = c.length; i < len; i++) {
      var ri = this.lookup(k[i % k.length]);
      var ci = this.tableau[ri].indexOf(c[i]);
      var letter = this.a[ci];
      out += letter;
    }
    return out;
  }

  idx(letter) {
    return this.a.indexOf(letter);
  }

  lookup (letter) {
    for (var i = 0,len = this.rowKeys.length; i < len; i++) {
      if(this.rowKeys[i].indexOf(letter) > -1) {
        return i;
      }
    }
  }
}

module.exports = Porta;