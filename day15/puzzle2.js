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
  const lensesBox = new Array(256).fill().map(() => [])
  for (const element of arr) {
    const label = extractLabel(element)
    if (element.includes('=')) {
      const futureIndexOfElement = runHashAlgorithm(label)
      const value = element.replace('=', ' ')
      const indexToUpdate = lensesBox[futureIndexOfElement].findIndex(
        (el) => extractLabel(el) === label
      )
      if (indexToUpdate === -1) {
        lensesBox[futureIndexOfElement].push(value)
      } else {
        lensesBox[futureIndexOfElement][indexToUpdate] = value
      }
    }
    if (element.includes('-')) {
      for (let rowIndex = 0; rowIndex < lensesBox.length; rowIndex++) {
        const indexToRemove = lensesBox[rowIndex].findIndex(
          (el) => extractLabel(el) === label
        )
        if (indexToRemove !== -1) {
          lensesBox[rowIndex].splice(indexToRemove, 1)
        }
      }
    }
  }
  return lensesBox
}

const resolveFocusingPowerOfLens = (lensesBox) => {
  let total = 0
  for (let i = 0; i < lensesBox.length; i++) {
    for (let j = 0; j < lensesBox[i].length; j++) {
      // i represents box #ID, j represents slot id
      total = total + (i + 1) * (j + 1) * extractDigitValue(lensesBox[i][j])
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
