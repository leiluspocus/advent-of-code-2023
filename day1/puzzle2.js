const fs = require('fs')
const path = require('path')

const { extractCalibrationValue } = require('./puzzle1')

const LETTERS_TO_DIGITS = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
}

/*************************************************************
 * This doesn't handle overlapping words like eightwo ... T_T
 * I leave it here for posterity
 *************************************************************/
const transformLettersToDigitsv1 = (inputString) => {
  for (const index of Object.entries(LETTERS_TO_DIGITS)) {
    inputString = inputString.replace(
      new RegExp(index[0], 'g'), // Replace globally !
      index[1]
    )
  }
  return inputString
}

const transformLettersToDigits = (inputString) => {
  const regexPattern = new RegExp(
    '(?=(one|two|three|four|five|six|seven|eight|nine))',
    'g'
  )
  let matches = [...inputString.matchAll(regexPattern)]
  let i = 0

  // Trick to handle overlapping cases
  // We replace oneight with oneeight for example ^^'
  for (const item of matches) {
    if (matches[i + 1]) {
      if (item[1].length + item.index > matches[i + 1].index) {
        inputString = inputString.replaceAll(
          matches[i + 1][1],
          item[1].slice(-1) + matches[i + 1][1]
        )
      }
    }
    i = i + 1
  }

  // Actually replace letters with digits
  for (const digit of Object.entries(LETTERS_TO_DIGITS)) {
    inputString = inputString.replaceAll(digit[0], digit[1])
  }

  return inputString
}

const resolveLine = (line) => {
  const sanitizedLine = transformLettersToDigits(line)
  return extractCalibrationValue(sanitizedLine)
}

const resolveCasesEnonce = () => {
  let content = fs.readFileSync(process.cwd() + '/day1/enonce.txt').toString()
  const puzzle = content.split('\n')
  puzzle.pop() // last blank line
  let sum = 0
  for (const line of puzzle) {
    const sanitizedLine = transformLettersToDigits(line)
    sum = sum + extractCalibrationValue(sanitizedLine)
  }
  return sum
}

const resolvePuzzle2 = () => {
  let content = fs
    .readFileSync(process.cwd() + '/day1/puzzle_input.txt')
    .toString()
  const puzzle = content.split('\n')
  puzzle.pop() // blank line
  let sum = 0
  for (const line of puzzle) {
    const sanitizedLine = transformLettersToDigits(line)
    sum = sum + extractCalibrationValue(sanitizedLine)
  }
  return sum
}

module.exports = {
  transformLettersToDigits,
  resolvePuzzle2,
  resolveCasesEnonce,
  resolveLine,
}
