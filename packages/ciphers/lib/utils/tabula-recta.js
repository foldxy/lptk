const tabula = function (alphabet) {
  let t = [];
  for (var i = 0; i < alphabet.length; i++) {
    t.push([].concat(alphabet.slice(i), alphabet.slice(0, i) ))
  }

  return t;
}

module.exports = tabula;