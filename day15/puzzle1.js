const { readFile } = require('../helpers/file')

const runHashAlgorithm = (str) => {
  const charArray = [...str]
  let value = 0
  for (const char of charArray) {
    value = ((value + char.charCodeAt(0)) * 17) % 256
  }
  return value
}

const resolvePuzzle = (fileInput) => {
  return ''
}
module.exports = { resolvePuzzle, runHashAlgorithm }
