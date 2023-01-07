const selectors = require('./selectors')

const toLines = (input) => {
  return input    
  .replace(selectors.line,'')
  .replace(/\n/gm,'')
  .trim()
  .split(/\./gm)
} 

module.exports = toLines