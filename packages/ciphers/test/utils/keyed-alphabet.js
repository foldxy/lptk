// utils > keyed-alphabet test
const ka = require('../../lib/utils/keyed-alphabet')
const alphabet = require('../../lib/alphabets').defacto();

function test() {
  var key = 'ZEBRA';
  var out = ka(key,alphabet)
  var expected = 'ZEBRACDFGHIJKLMNOPQSTUVWXY';

  if (out === expected) {
    console.log('UTIL: keyed-alphabet', 'Test Passed.')
  } else {
    console.error('UTIL: keyed-alphabet', 'Test Failed.')
  }
  console.log(key, out, out === expected)
}

module.exports = test;