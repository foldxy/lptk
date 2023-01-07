```javascript
// primus-translator
const Translator = require('primus-translator')
const GPT = new Translator()

GPT.toLatin('ᛖᛗᛖᚱᚷᛖ') // => ['E', 'M', 'E', 'R', 'G', 'E']
GPT.toLatin('ᛖᛗᛖᚱᚷᛖ',true) // => 'EMERGE'

GPT.toPositions('ᛖᛗᛖᚱᚷᛖ') // => [ 18, 19, 18, 4, 6, 18 ]
GPT.toPositions('ᛖᛗᛖᚱᚷᛖ',true) // => '18,19,18,4,6,18'

GPT.fromPositions([ 18, 19, 18, 4, 6, 18 ]) // => ['E', 'M', 'E', 'R', 'G', 'E']
GPT.fromPositions([ 18, 19, 18, 4, 6, 18 ],true) // => 'EMERGE'

GPT.toPrimes('ᛖᛗᛖᚱᚷᛖ') // => [ 67, 71, 67, 11, 17, 67 ]
GPT.toPrimes('ᛖᛗᛖᚱᚷᛖ',true) // => '67,71,67,11,17,67'

GPT.fromPrimes([ 67, 71, 67, 11, 17, 67 ]) // => ['E', 'M', 'E', 'R', 'G', 'E']
GPT.fromPrimes([ 67, 71, 67, 11, 17, 67 ],true) // => 'EMERGE'

GPT.toTotients('ᛖᛗᛖᚱᚷᛖ') // => [ 66, 70, 66, 10, 16, 66 ]
GPT.toTotients('ᛖᛗᛖᚱᚷᛖ',true) // => '66,70,66,10,16,66'

GPT.fromTotients([ 66, 70, 66, 10, 16, 66 ]) // => ['E', 'M', 'E', 'R', 'G', 'E']
GPT.fromTotients([ 66, 70, 66, 10, 16, 66 ],true) // => 'EMERGE'

```