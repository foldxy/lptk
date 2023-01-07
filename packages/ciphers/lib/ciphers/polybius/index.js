// polybius
const alphabet5x5 = require('../../alphabets').defacto5x5()
const ka = require('../../utils/keyed-alphabet')

class Polybius {

  constructor(key, header = 'ABCDE', alphabet = alphabet5x5, colCount = 5) {
    this.header = header;
    this.a = ka(key, alphabet);
    this.colCount = colCount;
    var re = new RegExp(`.{1,${colCount}}`, 'g');
    this.sq = this.a.match(re)
  }

  encipher(plaintext) {
    plaintext = plaintext.toUpperCase().replace(/\.|\/|,|-|\s|:|\\|'/g, '');
    var out = ''
    for (var i = 0, len = plaintext.length; i < len; i++) {
      out += this.letterToPair(plaintext[i]);
    }
    return out;
  }

  decipher(ciphertext) {
    let pairs = ciphertext.match(/.{1,2}/g);
    var out = ''
    for (var i = 0, len = pairs.length; i < len; i++) {
      out += this.pairToLetter(pairs[i]);
    }
    return out;
  }

  letterToPair(letter) {
    var idx = this.a.indexOf(letter);
    var ri = Math.floor(idx / this.colCount);
    var ci = idx % this.colCount;
    return this.header[ri] + this.header[ci];
  }

  pairToLetter(pair) {
    var ri = this.header.indexOf(pair[0])
    var ci = this.header.indexOf(pair[1])
    return this.sq[ri][ci];
  }

}

module.exports = Polybius;