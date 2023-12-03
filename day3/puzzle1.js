const { readFile } = require('../helpers/file')
const { sum } = require('../helpers/math')

const isAdjacentSymbol = (potentialAdjacentSymbol, item) => {
  if (item === undefined || potentialAdjacentSymbol === undefined) {
    return false
  }
  if (isNaN(parseInt(item.value))) {
    return false
  }
  return (
    potentialAdjacentSymbol.type != item.type &&
    item.type === 'number' &&
    potentialAdjacentSymbol.position <= item.position + item.value.length
  )
}

const buildMatrix = (input) => {
  const data = readFile(input)
  const findDigitsRgx = new RegExp('(\\d+)', 'gm')
  const findSymbolsRgx = new RegExp('[^\\d.\\n]', 'gm')
  const symbolsDigitsMatrix = []
  for (const line of data) {
    const lineMatrix = []
    while ((match = findDigitsRgx.exec(line)) !== null) {
      lineMatrix.push({
        value: match[0],
        type: 'number',
        position: match.index,
      })
    }
    while ((match = findSymbolsRgx.exec(line)) != null) {
      lineMatrix.push({
        value: match[0],
        type: 'symbol',
        position: match.index,
      })
    }
    symbolsDigitsMatrix.push(lineMatrix)
  }
  return symbolsDigitsMatrix
}

const resolvePuzzle = (filePath) => {
  const matrix = buildMatrix(filePath)
  const elligibleNumbers = []
  let i = 0
  for (const row of matrix) {
    for (let j = 0; j <= row.length; j++) {
      // Check neighbors
      if (isAdjacentSymbol(row[j + 1], row[j])) {
        elligibleNumbers.push(parseInt(row[j].value))
        delete matrix[i][j + 1]
      }
      if (isAdjacentSymbol(row[j - 1], row[j])) {
        elligibleNumbers.push(parseInt(row[j].value))
        delete matrix[i][j - 1]
      }
      if (matrix[i + 1] !== undefined) {
        for (let k = 0; k < matrix[i + 1].length; k++) {
          if (isAdjacentSymbol(matrix[i + 1][k], row[j])) {
            elligibleNumbers.push(parseInt(row[j].value))
            delete matrix[i + 1][j]
          }
        }
      }
      if (matrix[i - 1] !== undefined) {
        for (let k = 0; k < matrix[i - 1].length; k++) {
          if (isAdjacentSymbol(matrix[i - 1][k], row[j])) {
            elligibleNumbers.push(parseInt(row[j].value))
            delete matrix[i - 1][j]
          }
        }
      }
    }
    i++
  }
  console.log(elligibleNumbers)
  return sum(elligibleNumbers)
}
module.exports = { resolvePuzzle }
