const selectors = {
  word: /-/g,
  clause: /\./g,
  paragraph: /&/g,
  section: /\$/g,
  chapter: /§/g,
  line: /\//g,
  page: /%/g,
  empty: /^$[\r\n]/gm,
  runic: /\/|\n|[a-zA-Z0-9]/gm,
  plain: /\/|\n/gm,
}

const toWords = function (input, plaintext = false) {
  return input
    .replace(selectors.section, '')
    .replace(selectors.page, '')
    .replace(selectors.paragraph, '')
    .replace(selectors.empty, '')
    .replace(plaintext ? selectors.plain : selectors.runic, '')
    .trim()
    .split(/-|\./gm)
    .filter(x => x.length > 0)
}

module.exports = toWords;