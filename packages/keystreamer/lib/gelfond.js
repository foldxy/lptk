const Gelfond = [2,3,1,4,0,6,9,2,6,3,2,7,7,9,2,6,9,0,0,5,7,2,9,0,
  8,6,3,6,7,9,4,8,5,4,7,3,8,0,2,6,6,1,0,6,2,4,2,6,0,
  0,2,1,1,9,9,3,4,4,5,0,4,6,4,0,9,5,2,4,3,4,2,3,5,0,
  6,9,0,4,5,2,7,8,3,5,1,6,9,7,1,9,9,7,0,6,7,5,4,9,2]
 

const gelfondAt = function (n) {
  return Gelfond[i]
}

const stream = function(len, start = 0) {
  return Gelfond.slice(start, len)
}

module.exports = {
  gelfondAt,
  stream
}