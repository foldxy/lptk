const raw = require('./liber-primus-text')
const selectors = require('./selectors')
const strip = require('./strip')
const toLines = require('./to-lines')
const toSentences = require('./to-sentences')
const toWords = require('./to-words')

const sections = () => {
  return strip(raw, [
    selectors.page,
    selectors.paragraph,
    selectors.empty
  ])
    .split(selectors.section)
    .map(x => x.trim())
}

const sectionLines = () => {
  return sections().map(x => toLines(x))
}

const sectionSentences = () => {
  return sections().map(x => toSentences(x))
}

const sectionWords = () => {
  return sections().map(x => toWords(x))
}

module.exports = {
  sections,
  sectionLines,
  sectionSentences,
  sectionWords
}