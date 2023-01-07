// xor.js
//
//
const xor = (n, k, radix = 10, kradix = radix) => parseInt(n, radix) ^ parseInt(k, kradix)
const xorBase2 = (n, k) => xorBaseX(n, k, 2)
const xorBase10 = (n, k) => xorBaseX(n,k, 10)
const xorBase16 = (n, k) => xorBaseX(n, k, 16)

module.exports = {
  xor,
  xorBase2,
  xorBase10,
  xorBase16,
}