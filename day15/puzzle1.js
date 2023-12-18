const { readFile } = require('../helpers/file')

const runHashAlgorithm = (str) => {
  const charArray = [...str]
  let value = 0
  for (const char of charArray) {
    value = ((value + char.charCodeAt(0)) * 17) % 256
  }
  return value
}

const getSumOfHashValues = (str) => {
  const elements = str.split(',')
  let sum = 0
  for (const element of elements) {
    sum += runHashAlgorithm(element)
  }
  return sum
}

const resolvePuzzle = (fileInput) => {
  const data = readFile(fileInput)[0]
  return getSumOfHashValues(data)
}
module.exports = { resolvePuzzle, runHashAlgorithm, getSumOfHashValues }
