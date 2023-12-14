const { readFile } = require('../helpers/file')

const sum = (arr) => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue)
}

const buildMatrix = (fileInput) => {
  const data = readFile(fileInput)
  const matrix = []
  let line = []
  for (const l of data) {
    line = [...l]
    matrix.push(line)
  }
  return matrix
}
module.exports = { sum, buildMatrix }
