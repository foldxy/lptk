const closest = function (pos, neg) {
  let output = [];
  for (var i = 0; i < pos.length; i++) {
    output.push(Math.abs(neg[i]) < Math.abs(pos[i]) ? neg[i] : pos[i]);
  };
  return output;
}

module.exports = closest;