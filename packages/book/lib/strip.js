const strip = (input, selex) => {
  var output = input

  if (!Array.isArray(selex)) {
    selex = [selex]
  }

  for (var i = 0; i < selex.length; i++) {
    output = output.replace(selex[i], '')
  }

  return output.trim()
}

module.exports = strip