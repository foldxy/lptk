const selectors = {
  word: /-/g,
  clause: /\./g,
  paragraph: /&/g,
  section: /\$/g,
  chapter: /§/g,
  line: /\//g,
  page: /%/g,
  empty: /^$[\r\n]/gm
}

module.exports = selectors