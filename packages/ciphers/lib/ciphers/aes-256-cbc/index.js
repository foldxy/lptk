// lib/ciphers/aes
const crypto = require('crypto');
const keyLength = 32;
const ivLength = 16;
const algorithm = 'aes-256-cbc';

class AES256CBC {

  constructor(key = crypto.randomBytes(keyLength), iv = crypto.randomBytes(ivLength)) {
    this.key = Buffer.from(key);
    this.iv = Buffer.from(iv);
  }

  encipher(plaintext, secret) {
    let cipher = crypto.createCipheriv(algorithm, secret);
    let buffer = Buffer.concat([
      cipher.update(plaintext),
      cipher.final()]);
    return {
      iv: this.iv.toString('hex'),
      data: buffer.toString('base64')
    }
  }

  decipher(ciphertext, secret) {
    let cipher = crypto.createDecipheriv(algorithm, secret)
    let buffer = Buffer.concat([
      cipher.update(Buffer.from(ciphertext, 'base64')),
      cipher.final()]);
    return buffer.toString();
  }

  encipheriv(plaintext) {
    let cipher = crypto.createCipheriv(algorithm, this.key, this.iv);
    let buffer = Buffer.concat([
      cipher.update(plaintext),
      cipher.final()]);
    return {
      iv: this.iv.toString('hex'),
      data: buffer.toString('base64')
    }
  }

  decipheriv(ciphertext) {
    let cipher = crypto.createDecipheriv(algorithm, this.key, this.iv)
    let buffer = Buffer.concat([
      cipher.update(Buffer.from(ciphertext, 'base64')),
      cipher.final()]);
    return buffer.toString();
  }

}

module.exports = AES256CBC;


// var key = '0123456789ABCDEF0123456789ABCDEF'
// var iv = '0123456789ABCDEF'
// console.log(Buffer.from(iv).length)
// var cipher = new AES256CBC(key, iv);
// var enc = cipher.encipher('DEFENDTHEEASTWALLOFTHECASTLE');
// var dec = cipher.decipher(enc.data);
// console.log(enc)
// console.log(dec)
