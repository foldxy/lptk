// autokey/index.js
const dabet = require('../../alphabets').defacto()
const Caesar = require('../caesar');

class Autokey {

  constructor(keyword, alphabet = dabet) {
    this.a = alphabet;
    this.keyword = keyword;
    this.cipher = new Caesar(this.a);
  }

  encipher(plaintext) {
    var p = plaintext//.toUpperCase().replace(/\.|\/|,|-|\s|:|\\|'/g, '');
    var k = this.keyword.slice(0) + p.slice(0, p.length - this.keyword.length);
    var out = '';
    for (var i = 0, len = p.length; i < len; i++) {
      if (this.a.indexOf(plaintext[i]) === -1) {
        out += plaintext[i];
      } else {
        out += this.cipher.encipher(plaintext[i], this.a.indexOf(k[i]))
      }
    }
    return out;
  }

  decipher(ciphertext) {
    var c = ciphertext;
    var k = this.keyword.slice(0);
    var out = '';
    for (var i = 0, len = ciphertext.length; i < len; i++) {
      if (this.a.indexOf(ciphertext[i]) === -1) {
        out += ciphertext[i];
      } else {
        var letter = this.cipher.decipher(ciphertext[i], this.a.indexOf(k[i]))
        k += letter;
        out += letter;
      }
    }
    return out;
  }
}

module.exports = Autokey;