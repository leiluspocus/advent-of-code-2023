const fs = require('fs')
const path = require('path')

function extractCalibrationValue(inputString) {
  const inputArray = [...inputString]
  const integersFound = []
  for (const element of inputArray) {
    if (!isNaN(parseInt(element))) {
      integersFound.push(element)
    }
  }
  const lastIndex = integersFound.length - 1
  return parseInt(integersFound[0] + integersFound[lastIndex])
}

function resolvePuzzle1() {
  let content = fs
    .readFileSync(process.cwd() + '/day1/puzzle_input.txt')
    .toString()
  const puzzle = content.split('\n')
  puzzle.pop() // blank line
  let sum = 0
  for (const line of puzzle) {
    sum += extractCalibrationValue(line)
  }
  return sum
}
module.exports = { extractCalibrationValue, resolvePuzzle1 }
