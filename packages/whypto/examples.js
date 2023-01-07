const Whypto = require('./index')
const Ciphers = require('@lptk/ciphers')

const a_warning_text = 'ᚱ-ᛝᚱᚪᛗᚹ'
const a_koan_text = 'ᚹ-ᚣᛠᚹᛟ'
const emerge_text = 'ᚪᚾᛞ-ᛖᛗᛖᚱᚷᛖ'

console.group('Example 1 > Atbash')
Whypto.factory(a_warning_text)
  .atbash()
  .printLatin()
console.groupEnd()


console.group('Example 2 > Caesar(3) + Atbash w/ verbose output')
Whypto.factory(a_koan_text, { verbose: true })
  .caesar(3)
  .atbash()
  .printLatin()
console.groupEnd()


console.group('Example 3 > Transliteration')
Whypto.factory(emerge_text)
  .printLatin()
console.groupEnd()


console.group('Example 3 > Affine w/ Latin Alphabet')
Whypto.factory('IHHWVC', { alphabet: Ciphers.alphabets.english() })
  .affine(5, 8)
  .printPlaintext()
console.groupEnd()
