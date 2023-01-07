const primes = require('../generators/primes');

const add = function (accumulator, a) {
  return accumulator + a;
}

const multiply = function (accumulator, a) {
  return accumulator * a;
}

const sum = function(n, offset = 0) {
  let p = primes(n + offset);
  p = p.slice(offset);
  // console.log(p);
  return p.reduce(add);
}

const product = function(n, offset = 0) {
  let p = primes(n + offset);
  p = p.slice(offset);
  // console.log(p);
  return p.reduce(multiply);
}

module.exports = {
  sum,
  product
};