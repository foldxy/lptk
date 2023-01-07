// rot13/index.js
const dabet = require('../../alphabets').defacto()
const Caesar = require('../caesar')


class ROT13 {

  constructor(alphabet = dabet) {
    this.engine = new Caesar(alphabet);
    this.a = alphabet;
  }

  encipher(plaintext) {
    return this.engine.encipher(plaintext, 13)
  }

  decipher(ciphertext) {
    return this.engine.decipher(ciphertext, 13)
  }
  
}

module.exports = ROT13;