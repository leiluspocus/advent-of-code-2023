const { readFile } = require('../helpers/file')

const extractGameID = (gameLine) => {
  const extractIdRegexp = new RegExp('(?<=Game\\s)\\d+', 'gm')
  const matches = [...gameLine.match(extractIdRegexp)]
  return parseInt(matches[0])
}

const removeGameInfos = (gameLine) => {
  const removeGameInfosRegExp = new RegExp('Game\\s\\d*:\\s+', 'gm')
  return gameLine.replace(removeGameInfosRegExp, '')
}

const extractGameResults = (gameLine) => {
  const colorInfos = removeGameInfos(gameLine)
  const games = colorInfos.split(';')
  const formatedArray = []
  for (const game of games) {
    const items = game.split(',')
    const obj = {}
    for (let ball of items) {
      // Remove last and first space that can be in string
      ball = ball.replace(/\s+$/, '').replace(/^\s+/, '')
      const colorValuePair = ball.split(' ')
      obj[colorValuePair[1]] = parseInt(colorValuePair[0])
    }
    formatedArray.push(obj)
  }
  return formatedArray
}

const resolvePuzzle = (filePath) => {
  const puzzle = readFile(filePath)
  const possibleGamesId = []
  const MAX_VALUES = { red: 12, green: 13, blue: 14 }
  for (const line of puzzle) {
    const results = extractGameResults(line)
    let isValidLine = true
    for (const result of results) {
      Object.entries(result).forEach(([key, value]) => {
        if (MAX_VALUES[key] < value) {
          isValidLine = false
        }
      })
    }
    if (isValidLine === true) {
      possibleGamesId.push(extractGameID(line))
    }
  }

  // Calculate the sum of ids
  let sum = 0
  for (const id of possibleGamesId) {
    sum += id
  }
  return sum
}

module.exports = {
  extractGameResults,
  removeGameInfos,
  extractGameID,
  resolvePuzzle,
}
