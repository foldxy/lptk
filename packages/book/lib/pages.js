const raw = require('./liber-primus-text')
const selectors = require('./selectors')
const strip = require('./strip')
const toLines = require('./to-lines')
const toSentences = require('./to-sentences')
const toWords = require('./to-words')

const pages = () => {
  var pages = strip(raw, [
    selectors.section,
    selectors.paragraph,
    selectors.empty
  ])
    .split(selectors.page)
    .map(x => x.trim())

  pages.unshift('Liber Primus')
  pages = [...pages.slice(0, 2), 'Chapter 1\n\nIntus', ...pages.slice(2)]
  return pages
}

const pageLines = () => {
  return pages().map(x => toLines(x))
}

const pageSentences = () => {
  return pages().map(x => toSentences(x))
}

const pageWords = () => {
  return pages().map(x => toWords(x))
}

module.exports = {
   pages,
   pageLines,
   pageSentences,
   pageWords
}