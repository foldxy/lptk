const alphabets = require('./lib/alphabets')
const ciphers = require('./lib/ciphers')


module.exports = {
  alphabets,
  ...ciphers
}