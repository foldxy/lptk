const selectors = require('./selectors')

const toLines = (input) => {
  return input    
  .replace(selectors.line,'')
  .trim()
  .split(/\n/gm)
} 

module.exports = toLines