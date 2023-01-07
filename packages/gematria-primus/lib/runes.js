// Gematria Primus - Rosetta Stone
// https://en.wikipedia.org/wiki/Anglo-Saxon_runes

const runes = function () {
  const runes = [
    { index: 0, rune: "ᚠ", letter: "F", alt: "F", prime: 2, totient: 1, fib: 1, lucas: 2 },
    { index: 1, rune: "ᚢ", letter: "U", alt: "V", prime: 3, totient: 2, fib: 2, lucas: 1 },
    { index: 2, rune: "ᚦ", letter: "TH", alt: "TH", prime: 5, totient: 4, fib: 3, lucas: 3 },
    { index: 3, rune: "ᚩ", letter: "O", alt: "O", prime: 7, totient: 6, fib: 5, lucas: 4 },
    { index: 4, rune: "ᚱ", letter: "R", alt: "R", prime: 11, totient: 10, fib: 8, lucas: 7 },
    { index: 5, rune: "ᚳ", letter: "C", alt: "K", prime: 13, totient: 12, fib: 13, lucas: 11 },
    { index: 6, rune: "ᚷ", letter: "G", alt: "G", prime: 17, totient: 16, fib: 21, lucas: 18 },
    { index: 7, rune: "ᚹ", letter: "W", alt: "W", prime: 19, totient: 18, fib: 34, lucas: 29 },
    { index: 8, rune: "ᚻ", letter: "H", alt: "H", prime: 23, totient: 22, fib: 55, lucas: 47 },
    { index: 9, rune: "ᚾ", letter: "N", alt: "N", prime: 29, totient: 28, fib: 89, lucas: 76 },
    { index: 10, rune: "ᛁ", letter: "I", alt: "I", prime: 31, totient: 30, fib: 144, lucas: 123 },
    { index: 11, rune: "ᛄ", letter: "J", alt: "J", prime: 37, totient: 36, fib: 233, lucas: 199 },
    { index: 12, rune: "ᛇ", letter: "EO", alt: "EO", prime: 41, totient: 40, fib: 377, lucas: 322 },
    { index: 13, rune: "ᛈ", letter: "P", alt: "P", prime: 43, totient: 42, fib: 610, lucas: 521 },
    { index: 14, rune: "ᛉ", letter: "X", alt: "X", prime: 47, totient: 46, fib: 987, lucas: 843 },
    { index: 15, rune: "ᛋ", letter: "S", alt: "Z", prime: 53, totient: 52, fib: 1597, lucas: 1364 },
    { index: 16, rune: "ᛏ", letter: "T", alt: "T", prime: 59, totient: 58, fib: 2584, lucas: 2207 },
    { index: 17, rune: "ᛒ", letter: "B", alt: "B", prime: 61, totient: 60, fib: 4181, lucas: 3571 },
    { index: 18, rune: "ᛖ", letter: "E", alt: "E", prime: 67, totient: 66, fib: 6765, lucas: 5778 },
    { index: 19, rune: "ᛗ", letter: "M", alt: "M", prime: 71, totient: 70, fib: 10946, lucas: 9349 },
    { index: 20, rune: "ᛚ", letter: "L", alt: "L", prime: 73, totient: 72, fib: 17711, lucas: 15127 },
    { index: 21, rune: "ᛝ", letter: "ING", alt: "NG", prime: 79, totient: 78, fib: 28657, lucas: 24476 },
    { index: 22, rune: "ᛟ", letter: "OE", alt: "OE", prime: 83, totient: 82, fib: 46368, lucas: 39603 },
    { index: 23, rune: "ᛞ", letter: "D", alt: "D", prime: 89, totient: 88, fib: 75025, lucas: 64079 },
    { index: 24, rune: "ᚪ", letter: "A", alt: "A", prime: 97, totient: 96, fib: 121393, lucas: 103682 },
    { index: 25, rune: "ᚫ", letter: "AE", alt: "AE", prime: 101, totient: 100, fib: 196418, lucas: 167761 },
    { index: 26, rune: "ᚣ", letter: "Y", alt: "Y", prime: 103, totient: 102, fib: 317811, lucas: 271443 },
    { index: 27, rune: "ᛡ", letter: "IA", alt: "IO", prime: 107, totient: 106, fib: 514229, lucas: 439204 },
    { index: 28, rune: "ᛠ", letter: "EA", alt: "EA", prime: 109, totient: 108, fib: 832040, lucas: 710647 },
  ];

  return runes;
}

module.exports = runes;