// lib/utils/apply-offset.js

const sum = function (n, offset = 0) {
  return n + offset
}

const product = function (n, offset = 0) {
  return n * offset
}

module.exports = {
  sum,
  product
}