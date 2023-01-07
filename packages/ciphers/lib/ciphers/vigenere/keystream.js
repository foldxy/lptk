// vigenere/stream.js
const dabet = require('../../alphabets').defacto()
const Caesar = require('../caesar');

// Vigenere - keystream variant
//t his variant takes a array of integers, instead of a key

class VigenereKeystream {

  constructor(keystream, alphabet = dabet) {
    this.a = alphabet;
    this.k = keystream
    this.cipher = new Caesar(this.a);
  }

  encipher(plaintext, skip = []) {
    plaintext = plaintext.toUpperCase();
    var ki = 0;
    var out = '';

    for (var pi = 0; pi < plaintext.length; pi++) {
      if (this.a.indexOf(plaintext[pi]) === -1) {
        out += plaintext[pi];
      } else if (skip.indexOf(pi) > -1) {
        out += this.cipher.encipher(plaintext[pi], 0)
      } else {
        out += this.cipher.encipher(plaintext[pi], this.k[ki % this.k.length])
        ki++
      }
    }

    return out;
  }

  decipher(ciphertext, skip = []) {
    var ki = 0;
    var out = '';

    for (var ci = 0; ci < ciphertext.length; ci++) {
      if (this.a.indexOf(ciphertext[ci]) === -1) {
        out += ciphertext[ci];
      } else if (skip.indexOf(ci) > -1) {
        out += this.cipher.decipher(ciphertext[ci], 0)
      } else {
        out += this.cipher.decipher(ciphertext[ci], this.k[ki % this.k.length])
        ki++
      }
    }

    return out;
  }

}

module.exports = VigenereKeystream;