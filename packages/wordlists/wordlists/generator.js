const GPT = require('primus-translator').factory()

const unique = function (input) {
  if (!Array.isArray(input)) {
    if (typeof key === 'string') {
      key = key.split('');
    } else {
      throw ('Input must be either a string or array')
    }
  }
  return [... new Set(input)]
}

const generate = (wordlist) => {

  var variants = []

  wordlist
    .map(x => x.toString().toUpperCase())
    .map(x => GPT.latinVariants(x))
    .forEach(x => {
      x.map(y => {
        variants.push(GPT.fromLatin(y, true))
      })
    })


  return unique(variants)//
    .sort((a, b) => {
      if (a.length === b.length) return 0
      return a.length > b.length ? 1 : -1
    })
}

module.exports = generate
