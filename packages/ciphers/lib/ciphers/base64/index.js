// base64

class Base64 {

  encipher(plaintext, encoding = 'ascii') {
    return (Buffer.from(plaintext, encoding)).toString('base64');
  }

  decipher(ciphertext, encoding = 'ascii') {
    return (Buffer.from(ciphertext, 'base64')).toString(encoding);
  }

}

module.exports = Base64