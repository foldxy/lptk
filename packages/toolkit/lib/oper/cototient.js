const {phi} = require('./euler-totient');

const cototient = function(n) {
  return n - phi(n);
}

const stream = function (start = 1, length = 100) {
  const values = [];
  for (var n = start, len = n + length; n < len; n++) {
    values.push([n, cototient(n)]);
  }
  return values;
}

module.exports = {
  cototient,
  stream
}