const { buildMatrix } = require('../helpers/math')

const resolvePuzzle = (fileInput) => {
  const data = buildMatrix(fileInput)
  console.log(data)
}

module.exports = { resolvePuzzle }
