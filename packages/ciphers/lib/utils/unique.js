// /lib/utils/unique.js

const unique = function(key) {
  if (!Array.isArray(key)) {
    if (typeof key === 'string') {
      key = key.split('');
    } else {
      throw('Input must be either a string or array')
    }
  }
  return [... new Set(key)]
}

module.exports = unique;