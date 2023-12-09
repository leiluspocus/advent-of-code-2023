const { getPerformanceMade, extractData } = require('./puzzle1')

const extractAndJoinData = (fileInput) => {
  const [time, distance] = extractData(fileInput)
  return [[parseInt(time.join(''))], [parseInt(distance.join(''))]]
}

const resolvePuzzle = (inputFile) => {
  const possibilities = []
  const [time, distance] = extractAndJoinData(inputFile)

  for (let i = 0; i < time.length; i++) {
    let waysToWin = 0
    for (let j = 0; j < time[i]; j++) {
      const distanceMade = getPerformanceMade(j, time[i])
      if (distanceMade > distance[i]) {
        waysToWin++
      }
    }
    possibilities.push(waysToWin)
  }
  return possibilities.reduce((prev, curr) => prev * curr)
}

module.exports = { resolvePuzzle }
