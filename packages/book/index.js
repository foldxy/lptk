const raw = require('./lib/liber-primus-text')
const selectors = require('./lib/selectors')
const seperators = require('./lib/seperators')
const strip = require('./lib/strip')
const toLines = require('./lib/to-lines')
const toSentences = require('./lib/to-sentences')
const toWords = require('./lib/to-words')
const { book, bookLines, bookSentences, bookWords } = require('./lib/book')
const { sections, sectionLines, sectionSentences, sectionWords } = require('./lib/sections')
const { pages, pageLines, pageSentences, pageWords } = require('./lib/pages')

module.exports = {
  selectors,
  seperators,
  strip,
  toLines,
  toSentences,
  toWords,
  raw,
  book,
  bookLines,
  bookSentences,
  bookWords,
  sections,
  sectionLines,
  sectionSentences,
  sectionWords,
  pages,
  pageLines,
  pageSentences,
  pageWords,
  lines: bookLines // depreciate soon
}