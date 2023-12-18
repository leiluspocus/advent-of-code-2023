const { runHashAlgorithm } = require('./puzzle1')
const { readFile } = require('../helpers/file')

const resolvePuzzle = (fileInput) => {
  const data = readFile(fileInput)[0]
  const box = buildLensesBox(data)
  return resolveFocusingPowerOfLens(box)
}

const extractLabel = (str) => {
  const regex = new RegExp('([a-z])+', 'gm')
  const matches = regex.exec(str)
  return matches[0]
}

const extractDigitValue = (str) => {
  const regex = new RegExp('(\\d)', 'gm')
  const matches = regex.exec(str)
  return parseInt(matches[0])
}

const buildLensesBox = (str) => {
  const arr = str.split(',')
  const lensesBox = []
  for (const element of arr) {
    const label = extractLabel(element)
    if (element.includes('=')) {
      let found = false
      const futureIndexOfElement = runHashAlgorithm(label)
      const value = element.replace('=', ' ')
      for (const lens of lensesBox) {
        if (lens !== undefined) {
          for (let i = 0; i < lens.length; i++) {
            if (lens[i].includes(label)) {
              lens[i] = value
              found = true
            }
          }
        }
      }
      if (!found) {
        if (lensesBox[futureIndexOfElement] !== undefined) {
          lensesBox[futureIndexOfElement].push(value)
        } else {
          lensesBox[futureIndexOfElement] = [value]
        }
      }
    }
    if (element.includes('-')) {
      for (let rowIndex = 0; rowIndex < lensesBox.length; rowIndex++) {
        if (lensesBox[rowIndex] !== undefined) {
          for (let i = 0; i < lensesBox[rowIndex].length; i++) {
            if (lensesBox[rowIndex][i].includes(label)) {
              lensesBox[rowIndex].splice(i, 1)
            }
          }
          if (lensesBox[rowIndex].length === 0) {
            lensesBox.splice(rowIndex, 1)
          }
        }
      }
    }
  }
  return lensesBox
}

const resolveFocusingPowerOfLens = (lensesBox) => {
  let total = 0
  for (let i = 0; i < lensesBox.length; i++) {
    if (lensesBox[i] !== undefined) {
      for (let j = 0; j < lensesBox[i].length; j++) {
        // i represents box #ID, j represents slot id
        total = total + (i + 1) * (j + 1) * extractDigitValue(lensesBox[i][j])
      }
    }
  }
  return total
}

module.exports = {
  resolvePuzzle,
  buildLensesBox,
  extractLabel,
  extractDigitValue,
  resolveFocusingPowerOfLens,
}
