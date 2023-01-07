# Gematria Primus

```
The voice that just said, "you have no voice in your head", is the I.
```

## Installation

```bash
$ npm install foldxy/gematria-primus
```

## Entry Object
```javascript
const entryObject = { 
  index: 0, 
  rune: "ᚠ", 
  letter: "F", 
  alt: "F", 
  prime: 2, 
  totient: 1, 
  fib: 1, 
  lucas: 2 
}
```

## Gematria Primus

### Usage

```javascript
const GP = require('gematria-primus').factory()

console.log(GP.entryAt(0))

/*
Output: 
{ 
  index: 0, 
  rune: "ᚠ", 
  letter: "F", 
  alt: "F", 
  prime: 2, 
  totient: 1, 
  fib: 1, 
  lucas: 2 
}
*/
```

### Methods

|method|input|output|
|---|---|---|
|`length`|-|number of entries|
|`entryAt`|`index`|entry at `index`|
|`translate`| `"runicword"` or `[r,u,n,i,c,w,o,r,d]`| latin traslation of provided `runicword`|
|`rune`| `rune`|entry that contains `rune`|
|`runeAt`| `index`|rune letter at `index`|
|`runeArray`|-|array of all rune letters|
|`letter`| `letter`|entry that contains `letter`|
|`letterAt`| `index`|letter at `index`|
|`letterArray`|-|array of all letters|
|`alt`| `alt`|entry that contains `alt` letter|
|`altAt`| `index`|alt letter at `index`|
|`altArray`|-|array of all alt letters|
|`prime`| `prime`|entry that contains `prime` number|
|`primeAt`| `index`|prime number at `index`|
|`primeArray`|-|array of all prime numbers|
|`totient`| `totient`|entry that contains `totient` number|
|`totientAt`| `index`|totient number at `index`|
|`totientArray`|-|array of all totient numbers|
|`fib`| `fib`|entry that contains `fib` number|
|`fibAt`| `index`|fibonacci number at `index`|
|`fibArray`|-|array of all fibonacci numbers|
|`lucas`| `lucas`|entry that contains `lucas` number|
|`lucasAt`| `index`|lucas number at `index`|
|`lucasArray`|-|array of all lucas numbers|



## Word Values

** extracted to primus-translator **

## Rune Info Array (direct access)

### Usage

```javascript
const GP = require('gematria-primus').factory()

console.dir(GP.runes)
/*
Output:
[ { index: 0,
    rune: 'ᚠ',
    letter: 'F',
    alt: 'F',
    prime: 2,
    totient: 1,
    fib: 1,
    lucas: 2 },
  { index: 1,
    rune: 'ᚢ',
    letter: 'V',
    alt: 'U',
    prime: 3,
    totient: 2,
    fib: 2,
    lucas: 1 },
  { index: 2,
    rune: 'ᚦ',
    letter: 'TH',
    alt: 'TH',
    prime: 5,
    totient: 4,
    fib: 3,
    lucas: 3 },
  ...
]
*/
```