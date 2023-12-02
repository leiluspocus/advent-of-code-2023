const { readFile } = require('../helpers/file')
const { extractGameResults } = require('./puzzle1')

const getMinimumRequiredBalls = (line) => {
  const gameResults = extractGameResults(line)
  const minimumConfiguration = { blue: 0, green: 0, red: 0 }
  for (const result of gameResults) {
    Object.entries(result).forEach(([key, value]) => {
      if (minimumConfiguration[key] < value) {
        minimumConfiguration[key] = value
      }
    })
  }
  return minimumConfiguration
}

const resolvePuzzle = (fileInput) => {
  const puzzle = readFile(fileInput)
  const pows = []
  for (const line of puzzle) {
    const minimumValues = getMinimumRequiredBalls(line)
    pows.push(minimumValues.green * minimumValues.blue * minimumValues.red)
  }
  // Calculate the sum of ids
  return pows.reduce((accumulator, currentValue) => accumulator + currentValue)
}
module.exports = { getMinimumRequiredBalls, resolvePuzzle }
