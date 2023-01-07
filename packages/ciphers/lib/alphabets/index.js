
const en = require('./en').standard
const en5x5 = require('./en').standard5x5

const primusRunic = require('./primus').runic
const primusLatin = require('./primus').latin

module.exports = {

  // Defaults
  defacto: en,
  defacto5x5: en5x5,

  // English
  english: en,
  english5x5: en5x5,
  en,
  en5x5,

  // Primus [ Anglo Saxon runes ]
  primusLatin,
  primusRunic,

}