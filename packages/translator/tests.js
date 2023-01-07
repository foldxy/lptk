// tests.js
// TODO:
//  - Add phrase test to ensure formatting chars are ignored/stripped
//

const Translator = require('./index.js')
const gpt = new Translator()

// truth..
const runicword = 'ᛖᛗᛖᚱᚷᛖ'
const runicwordArray = ["ᛖ","ᛗ","ᛖ","ᚱ","ᚷ","ᛖ"]
const plainword = 'EMERGE'
const plainwordArray = ['E', 'M', 'E', 'R', 'G', 'E']
const plainwordPositions = [ 18, 19, 18, 4, 6, 18 ]
const plainwordPrimes = [ 67, 71, 67, 11, 17, 67 ]
const plainwordTotients = [ 66, 70, 66, 10, 16, 66 ]
const latinword = 'THINKING'

// helpers
const arraysEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// test
console.group('toLatin: ' + runicword)
console.log(gpt.toLatin(runicword))
console.log('Do arrays match?', arraysEqual(gpt.toLatin(runicword), plainwordArray))
console.log('Do strings match?', gpt.toLatin(runicword, true) == plainword)
console.groupEnd()

console.group('fromLatin: ' + plainwordArray)
console.log(gpt.fromLatin(plainwordArray))
console.log('Do arrays match?', arraysEqual(gpt.fromLatin(plainwordArray), runicwordArray))
console.log('Do strings match?', gpt.fromLatin(plainwordArray, true) == runicword)
console.groupEnd()

console.group('toPositions: ' + runicword)
console.log(gpt.toPositions(runicword))
console.log('Do arrays match?', arraysEqual(gpt.toPositions(runicword), plainwordPositions))
// console.log('Do strings match?', gpt.toPositions(runicword, true) == runicword)
console.groupEnd()

console.group('fromPositions: ' + plainwordPositions.join())
console.log(gpt.fromPositions(plainwordPositions))
console.log('Do arrays match?', arraysEqual(gpt.fromPositions(plainwordPositions), runicwordArray))
console.log('Do strings match?', gpt.fromPositions(plainwordPositions, true) == runicword)
console.groupEnd()

console.group('toPrimes: ' + runicword)
console.log(gpt.toPrimes(runicword))
console.log('Do arrays match?', arraysEqual(gpt.toPrimes(runicword), plainwordPrimes))
// console.log('Do strings match?', gpt.toPrimes(runicword, true) == runicword)
console.groupEnd()

console.group('fromPrimes: ' + plainwordPrimes.join())
console.log(gpt.fromPrimes(plainwordPrimes))
console.log('Do arrays match?', arraysEqual(gpt.fromPrimes(plainwordPrimes), runicwordArray))
console.log('Do strings match?', gpt.fromPrimes(plainwordPrimes, true) == runicword)
console.groupEnd()

console.group('toTotients: ' + runicword)
console.log(gpt.toTotients(runicword))
console.log('Do arrays match?', arraysEqual(gpt.toTotients(runicword), plainwordTotients))
// console.log('Do strings match?', gpt.toTotients(runicword, true) == runicword)
console.groupEnd()

console.group('fromTotients: ' + plainwordTotients.join())
console.log(gpt.fromTotients(plainwordTotients))
console.log('Do arrays match?', arraysEqual(gpt.fromTotients(plainwordTotients), runicwordArray))
console.log('Do strings match?', gpt.fromTotients(plainwordTotients, true) == runicword)
console.groupEnd()

console.group('latinVariants: ' +latinword)
console.log(gpt.latinVariants('THINKING').map(x=>x.join()))
console.log('Output length is 7?', gpt.latinVariants('THINKING').map(x=>x.join()).length === 7)
console.groupEnd()
