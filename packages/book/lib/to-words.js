const toWords = (input) => {
  return input
    .replace(/\/|\n/gm, '')
    .replace(/[0-9A-Z]/gmi, '')
    .trim()
    .split(/-|\./gm)
    .filter(x => x.length > 0)
}

module.exports = toWords