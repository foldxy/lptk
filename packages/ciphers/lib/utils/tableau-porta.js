const tableau = function (alphabet) {
  let t = [[].concat(alphabet.slice(13), alphabet.slice(0, 13))];
  for (var i = 1; i < alphabet.length / 2; i++) {
    var tn = [].concat(t[i-1]);
    var tshift = tn.shift();
    var tpop = tn.pop();
    t.push([].concat(tn.slice(0, (alphabet.length/2) - 1), tshift, tpop, tn.slice((alphabet.length/2) - 1)))
  }

  return t;
}

module.exports = tableau;