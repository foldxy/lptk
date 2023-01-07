// Gematria Primus
const runes = require('./runes')

class GematriaPrimus {

  static factory() {
    return new this()
  }

  constructor() {
    this.runes = runes()
    this.runeMap = new Map(this.runes.map(x => [x.rune, x]))
    this.letterMap = new Map(this.runes.map(x => [x.letter, x]))
    this.altMap = new Map(this.runes.map(x => [x.alt, x]))
    this.primeMap = new Map(this.runes.map(x => [x.prime, x]))
    this.totientMap = new Map(this.runes.map(x => [x.totient, x]))
    this.fibonacciMap = new Map(this.runes.map(x => [x.fib, x]))
    this.lucasMap = new Map(this.runes.map(x => [x.lucas, x]))
  }

  length() {
    return this.runes.length
  }

  entryAt(index) {
    return this.runes[index]
  }

  /*
  RUNE
  */

  rune(rune) {
    if (this.runeMap.has(rune)) {
      return this.runeMap.get(rune)
    }
    throw new Error(`[GematriaPrimus] Invalid rune: ${rune}`);
  }

  runeAt(index) {
    return this.runes[index].rune
  }

  runeArray() {
    return this.runes.map(x => x.rune)
  }

  /*
  PRIME
  */

  prime(prime) {
    if (this.primeMap.has(prime)) {
      return this.primeMap.get(prime)
    }
    throw new Error(`[GematriaPrimus] Invalid prime: ${prime}`);
  }

  primeAt(index) {
    return this.runes[index].prime
  }

  primeArray() {
    return this.runes.map(x => x.prime);
  }

  /*
  LETTER
  */

  letter(letter) {
    if (this.letterMap.has(letter)) {
      return this.letterMap.get(letter)
    }
    if (this.altMap.has(letter)) {
      return this.altMap.get(letter)
    }
    throw new Error(`[GematriaPrimus] Invalid letter: ${letter}`);
  }

  letterAt(index) {
    return this.runes[index].letter
  }

  letterArray() {
    return this.runes.map(x => x.letter)
  }

  /*
   ALT
  */

  alt(alt) {
    if (this.altMap.has(alt)) {
      return this.altMap.get(alt)
    }
    if (this.letterMap.has(alt)) {
      return this.letterMap.get(alt)
    }
    throw new Error(`[GematriaPrimus] Invalid alt: ${alt}`);
  }

  alt(index) {
    return this.runes[index].alt
  }

  altArray() {
    return this.runes.map(x => x.alt)
  }

  /*
  TOTIENT
  */

  totient(totient) {
    if (this.totientMap.has(totient)) {
      return this.totientMap.get(totient)
    }
    throw new Error(`[GematriaPrimus] Invalid totient: ${totient}`);
  }

  totientAt(index) {
    return this.runes[index].totient
  }

  totientArray() {
    return this.runes.map(x => x.totient);
  }

  /*
  FIBONACCI
  */

  fib(fib) {
    if (this.fibonacciMap.has(fib)) {
      return this.fibonacciMap.get(fib)
    }
    throw new Error(`[GematriaPrimus] Invalid fibonacci: ${fib}`);
  }

  fibAt(index) {
    return this.runes[index].fib
  }

  fibArray() {
    return this.runes.map(x => x.fib)
  }

  /*
  LUCAS
  */

  lucas(lucas) {
    if (this.totientMap.has(lucas)) {
      return this.totientMap.get(lucas)
    }
    throw new Error(`[GematriaPrimus] Invalid lucas: ${lucas}`);
  }

  lucasAt(index) {
    return this.runes[index].lucas
  }

  lucasArray() {
    return this.runes.map(x => x.lucas)
  }

  /*
  TRANSLATION
  */

  translate(input) {
    if (!Array.isArray(input)) {
      if (typeof input === 'string') {
        input = input.split('')
      } else {
        throw ('Input must be either a string or array')
      }
    }

    return input.map(x => {
      return this.runeArray().indexOf(x) > -1 ? this.rune(x).letter : x
    })
  }

}

module.exports = GematriaPrimus