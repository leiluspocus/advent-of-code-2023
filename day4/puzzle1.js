const { readFile } = require('../helpers/file')
const { convertStringWithNumbersToArray } = require('../helpers/strings')

const extractWiningCombinaisonAndProposals = (str) => {
  let sections = str.split(/[:|]/)
  sections.shift()

  let numbers = sections[0].match(/\d+/g)
  let winningNumbers = sections[1].match(/\d+/g)

  return [
    convertStringWithNumbersToArray(numbers),
    convertStringWithNumbersToArray(winningNumbers),
  ]
}

const countPoints = (winningNb, proposals) => {
  let pts = 0

  proposals.forEach((number) => {
    if (winningNb.includes(number)) {
      if (pts === 0) {
        pts++
      } else {
        pts = 2 * pts
      }
    }
  })

  return pts
}

const resolvePuzzle = (input) => {
  const data = readFile(input)
  let sum = 0
  data.forEach((line, index) => {
    const [winningNb, proposals] = extractWiningCombinaisonAndProposals(line)
    sum += countPoints(winningNb, proposals)
  })
  return sum
}

module.exports = {
  resolvePuzzle,
  extractWiningCombinaisonAndProposals,
  countPoints,
}
