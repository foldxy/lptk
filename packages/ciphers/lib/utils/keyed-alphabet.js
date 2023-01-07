// /lib/utils/keyed-alphabet.js
const unique = require('./unique');

const keyedAlphabet = function(key, alphabet) {
  return unique([].concat(unique(key),alphabet)).join('')
}

module.exports = keyedAlphabet;