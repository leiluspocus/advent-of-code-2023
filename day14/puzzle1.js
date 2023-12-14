const { buildMatrix } = require('../helpers/math')

const moveElementNorthOfColumn = (column, index) => {
  if (index < 0 || column[index] === '#') {
    return column
  }
  if (column[index] === 'O' && column[index - 1] !== undefined) {
    column[index - 1] = 'O'
    column[index] = '.'
  }
  return moveElementNorthOfColumn(column, index - 1)
}

const resolvePuzzle = (fileInput) => {
  const data = buildMatrix(fileInput)
  return []
}

module.exports = { resolvePuzzle, moveElementNorthOfColumn }
