const raw = require('./liber-primus-text')
const selectors = require('./selectors')
const strip = require('./strip')
const toLines = require('./to-lines')
const toSentences = require('./to-sentences')
const toWords = require('./to-words')

const book = () => {
  return strip(raw, [
    selectors.section,
    selectors.page,
    selectors.paragraph,
    selectors.empty
  ])
}

const bookLines = () => {
  return toLines(book())
}

const bookSentences = () => {
  return toSentences(book())
}

const bookWords = () => {
  return toWords(book())
}

module.exports = {
  book,
  bookLines,
  bookSentences,
  bookWords
}