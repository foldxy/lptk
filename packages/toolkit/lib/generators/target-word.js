const closest = require('./closest');
const furthest = require('./furthest');
// const { GematriaPrimus } = require('gematria-primus');
const gp = new GematriaPrimus(false);
const revgp = new GematriaPrimus(true);

/*

TODO: refactor to remove revgp

*/

const findOffsets = function (s, t, descending = false, reverse = false) {
  let key = [];
  let direction = descending ? -1 : 1;
  let runes = reverse ? revgp : gp;
  for (var i = 0; i < s.length; i++) {
    const si = gp.runeIndex(s[i]);
    for (var offset = 0; offset < 29; offset++) {
      let so = offset * direction
      let oi = (si + so) % 29;
      if (oi < 0) {
        oi = oi + (runes.length());
      }
      if (runes.letter(oi) === t[i]) {
        key.push(so);
        break;
      }
    }
  }
  return key;
}

const getKeySet = function (s, t, reverse = false) {
  let p = findOffsets(s, t, true, reverse).map(x => x * -1);;
  let n = findOffsets(s, t, false, reverse).map(x => x * -1);;
  let pr = findOffsets(s, t, true, reverse)
  let nr = findOffsets(s, t, false, reverse)
  let c = closest(p, n);
  let f = furthest(p, n);
  const dir = reverse ? 'R' : 'F';

  return [p, n, pr, nr, c, f]
}


const getKeys = function (s, t) {
  let keys = [].concat(
    getKeySet(s, t, false),
    // getKeySet(s, t, true),
  );
  return keys;
}

module.exports = getKeys;