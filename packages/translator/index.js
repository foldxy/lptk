// Gematria Primus Translator
const GP = require('@lptk/gematria-primus').factory()

const chop = function (variants, text, matches, append = []) {
  if (text.length < 2) return

  var shiftable = [].concat(matches)

  while (shiftable.length) {
    for (var i = 0; i < shiftable.length; i++) {
      const p = text.lastIndexOf(shiftable[i])
      const l = shiftable[i].length
      const prefix = text.substring(0, p)
      let suffix = text.substring(p + l)
      suffix = suffix.length ? suffix.split('') : []
      suffix = [].concat(shiftable[i], suffix, append)
      variants.push(([].concat(prefix.split(''), suffix)))
      shiftable.shift()
      chop(variants, prefix, shiftable, suffix)
    }
  }
}

class Translator {

  static factory() {
    return new this()
  }

  constructor() {
    this.runes = GP.runeArray()
  }

  toValues(input, valueAttribute, asString = false) {
    if (!Array.isArray(input)) {
      if (typeof input === 'string') {
        input = input.split('')
      } else {
        throw ('Input must be either a string or array')
      }
    }

    input = input
      .filter(x => this.runes.indexOf(x) > -1)
      .map(x => GP.rune(x)[valueAttribute])

    return asString ? input.join() : input
  }

  fromValues(input, valueAttribute, asString = false) {
    if (!Array.isArray(input)) {
      throw ('Input must be an array')
    }
    input = input.map(x => GP[valueAttribute](x).rune)
    return asString ? input.join('') : input
  }

  toLatin(input, asString = false) {
    if (!Array.isArray(input)) {
      if (typeof input === 'string') {
        input = input.split('')
      } else {
        throw ('Input must be either a string or array')
      }
    }

    input = input.map(x => this.runes.indexOf(x) > -1 ? GP.rune(x).letter : x)

    return asString ? input.join('') : input
  }

  fromLatin(input, asString = false) {
    return this.fromValues(input, 'letter', asString)
  }

  toPositions(input, asString = false) {
    return this.toValues(input, 'index', asString)
  }

  fromPositions(input, asString = false) {
    return this.fromValues(input, 'entryAt', asString)
  }

  toPrimes(input, asString = false) {
    return this.toValues(input, 'prime', asString)
  }

  fromPrimes(input, asString = false) {
    return this.fromValues(input, 'prime', asString)
  }

  toTotients(input, asString = false) {
    return this.toValues(input, 'totient', asString)
  }

  fromTotients(input, asString = false) {
    return this.fromValues(input, 'totient', asString)
  }

  latinVariants(word) {

    word = word.toUpperCase()
      .replace(/K/gi, 'C')
      .replace(/Z/gi, 'S')
      .replace(/Q/gi, 'CW')
      .replace(/'/gi, '')
      .replace(/É|È|Ê|Ë|Ē/gi, 'E')
      .replace(/Ö|Ó|Ò/gi, 'O')
      .replace(/Ü|Û/gi, 'U')
      .replace(/Ñ/gi, 'N')
      .replace(/Ï|Î/gi, 'I')
      .replace(/Ç/gi, 'C')
      .replace(/À|Å|Ä|Á|Â/gi, 'A')


    // Collection of Variants
    var variants = [
      word.split('')
    ]

    const regexL3 = /TH|EO|AE|IA|IO|EA|ING/gi
    const matchesL3 = word.match(regexL3)
    if (matchesL3 !== null) {
      chop(variants, word, [].concat(matchesL3.reverse()))
    }

    const regexL2 = /TH|EO|AE|IA|IO|EA|NG/gi
    const matchesL2 = word.match(regexL2)
    if (matchesL2 !== null) {
      chop(variants, word, [].concat(matchesL2.reverse()))
    }

    return variants
  }
}

module.exports = Translator