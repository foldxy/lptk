// utils > unique test
const unique = require('../../lib/utils/unique')

function test() {
  var input = 'ABCDEFEDCBA';
  var inputArray = 'ABCDEFEDCBA'.split('');
  var expected = 'ABCDEF';

  var out1 = unique(input).join('');
  var out2 = unique(inputArray).join('');


  if (out1 === expected && out2 === expected) {
    console.log('UTIL: unique', 'Test Passed.')
  } else {
    console.error('UTIL: unique', 'Test Failed.')
  }
  console.log(input, out1, out2, out1 === expected, out2 == expected)
}

module.exports = test;