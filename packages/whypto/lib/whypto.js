const Ciphers = require('@lptk/ciphers')
const Translator = require('@lptk/translator').factory()
const toWords = require('./utils/to-words')
const solvedwords = require('./wordlists/solved')
const cicadaishwords = require('./wordlists/cicadaish')
const english10 = require('./wordlists/english10')
const english20 = require('./wordlists/english20')

class Whypto {

  // 
  // STATIC FN()
  //

  static factory(ciphertext, opts = {}) {
    return new this(ciphertext, opts)
  }

  static defaultOptions() {
    return {
      alphabet: Ciphers.alphabets.primusRunic(),
      verbose: false
    }
  }

  // 
  // CONSTRUCTOR
  //

  constructor(ciphertext, opts = {}) {
    opts = Object.assign(Whypto.defaultOptions(), opts);
    this.ciphertext = ciphertext
    this.plaintext = ciphertext
    this.alphabet = opts.alphabet
    this.verbose = opts.verbose || false
  }

  // 
  // CIPHERS
  //

  affine(a, b, useEncipher = false) {
    const c = new Ciphers.Affine(this.alphabet)
    if (useEncipher) {
      this.logOp(`Affine > encipher(${a}, ${b})`)
      this.plaintext = c.encipher(this.plaintext, a, b)
    } else {
      this.logOp(`Affine > decipher(${a}, ${b})`)
      this.plaintext = c.decipher(this.plaintext, a, b)
    }
    return this
  }

  atbash() {
    const c = new Ciphers.Atbash(this.alphabet)
    this.logOp(`Atbash`)
    this.plaintext = c.encipher(this.plaintext)
    return this
  }

  autokey(keyword) {
    const c = new Ciphers.Autokey(keyword, this.alphabet)
    this.logOp(`Autokey > decipher(${offset})`)
    this.plaintext = c.decipher(this.plaintext)
    return this
  }

  caesar(offset, useEncipher = false) {
    const c = new Ciphers.Caesar(this.alphabet)
    if (useEncipher) {
      this.logOp(`Caesar > encipher(${offset})`)
      this.plaintext = c.encipher(this.plaintext, offset)
    } else {
      this.logOp(`Caesar > decipher(${offset})`)
      this.plaintext = c.decipher(this.plaintext, offset)
    }
    return this
  }

  vigenere(keyword, skips = [], useEncipher = false) {
    const c = new Ciphers.Vigenere(keyword, this.alphabet)
    if (useEncipher) {
      this.logOp(`Caesar > encipher(${keyword}) > skips: ${skips.join()}`)
      this.plaintext = c.encipher(this.plaintext, skips)
    } else {
      this.logOp(`Caesar > decipher(${keyword}) > skips: ${skips.join()}`)
      this.plaintext = c.decipher(this.plaintext, skips)
    }
    return this
  }

  vigenereStream(keystream, skips = [], useEncipher = false) {
    const c = new Ciphers.VigenereKeystream(keystream, this.alphabet)
    if (useEncipher) {
      this.logOp(`Caesar > encipher(${keystream.join()}) > skips: ${skips.join()}`)
      this.plaintext = c.encipher(this.plaintext, skips)
    } else {
      this.logOp(`Caesar > decipher(${keystream.join()}) > skips: ${skips.join()}`)
      this.plaintext = c.decipher(this.plaintext, skips)
    }
    return this
  }

  // 
  // CONSOLE OUTPUT
  //

  printCiphertext(label) {
    console.log(label || 'Ciphertext')
    console.log(this.ciphertext)
    return this
  }
  printPlaintext(label) {
    console.log(label || 'Plaintext')
    console.log(this.plaintext)
    return this
  }

  printRunic(label) {
    console.log(label || 'Plainrunic Text')
    console.log(this.toRunic())
    return this
  }

  printLatin(label) {
    console.log(label || 'Latin Text')
    console.log(this.toLatin(true))
    return this
  }

  // 
  // SCORE AGAINST SOLVED
  //

  score(label = 'Score', threshold = 0) {
    var words = this.toRunicWords()
    var matches = words.filter(x => solvedwords.indexOf(x) > -1)
    var uwords = [...new Set(words)]
    var umatches = [...new Set(matches)]

    var result = {
      label,
      possible: words.length + ' | ' + uwords.length,
      matching: matches.length + ' | ' + umatches.length,
      score: (matches.length / words.length) * 100,
      uscore: (umatches.length / uwords.length) * 100,
      matches: umatches.join(),
      latin: umatches.map(x => Translator.toLatin(x, true)).join()
    }
    if (result.score >= threshold) {
      console.dir(result)
    }
    return this
  }

  // 
  // SCORE AGAINST ENGLISH 10 DICT
  //

  scoreEnglish10(label = 'Score', threshold = 0) {
    var words = this.toRunicWords()
    var matches = words.filter(x => english10.indexOf(x) > -1)
    var uwords = [...new Set(words)]
    var umatches = [...new Set(matches)]

    var result = {
      label,
      possible: words.length + ' | ' + uwords.length,
      matching: matches.length + ' | ' + umatches.length,
      score: (matches.length / words.length) * 100,
      uscore: (umatches.length / uwords.length) * 100,
      matches: umatches.join(),
      latin: umatches.map(x => Translator.toLatin(x, true)).join()
    }
    if (result.score >= threshold) {
      console.dir(result)
    }
    return this
  }

  // 
  // SCORE AGAINST ENGLISH 20 DICT
  //

  scoreEnglish20(label = 'Score', threshold = 0) {
    var words = this.toRunicWords()
    var matches = words.filter(x => english20.indexOf(x) > -1)
    var uwords = [...new Set(words)]
    var umatches = [...new Set(matches)]

    var result = {
      label,
      possible: words.length + ' | ' + uwords.length,
      matching: matches.length + ' | ' + umatches.length,
      score: (matches.length / words.length) * 100,
      uscore: (umatches.length / uwords.length) * 100,
      matches: umatches.join(),
      latin: umatches.map(x => Translator.toLatin(x, true)).join()
    }
    if (result.score >= threshold) {
      console.dir(result)
    }
    return this
  }

  // 
  // SCORE AGAINST GENERATED DICT
  //

  scoreGenerated(label = 'Score', threshold = 0) {
    var words = this.toRunicWords()
    var matches = words.filter(x => cicadaishwords.indexOf(x) > -1)
    var uwords = [...new Set(words)]
    var umatches = [...new Set(matches)]

    var result = {
      label,
      possible: words.length + ' | ' + uwords.length,
      matching: matches.length + ' | ' + umatches.length,
      score: (matches.length / words.length) * 100,
      uscore: (umatches.length / uwords.length) * 100,
      matches: umatches.join(),
      latin: umatches.map(x => Translator.toLatin(x, true)).join()
    }
    if (result.score >= threshold) {
      console.dir(result)
    }
    return this
  }

  // 
  // TERMINAL / EXPORT OPERATIONS
  //


  toRunic() {
    return this.plaintext
  }

  toLatin(asString = false) {
    return Translator.toLatin(this.plaintext, asString)
  }

  toPrimes(asString = false) {
    return Translator.toPrimes(this.plaintext, asString)
  }

  toTotients(asString = false) {
    return Translator.toTotients(this.plaintext, asString)
  }

  toRunicWords() {
    return toWords(this.toRunic())
  }

  toLatinWords() {
    return toWords(this.toLatin(), true)
  }

  //
  // UTILITIES
  //

  clone() {
    return new Whypto(this.plaintext)
  }

  reset() {
    this.logOp('Resetting to original ciphertext')
    this.plaintext = this.ciphertext
    return this
  }

  //
  // LOGGING
  //

  log(msg) {
    if (this.verbose) console.log(msg)
  }

  logOp(msg) {
    this.log("[OP]\t" + msg)
  }

  logInfo(msg) {
    this.log("[INFO]\t" + msg)
  }

  logValue(msg) {
    this.log("[VALUE]\t" + msg)
  }

}

module.exports = Whypto
