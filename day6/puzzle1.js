const { readFile } = require('../helpers/file')
const { removeEmptyValuesInt } = require('../helpers/array')

const extractData = (fileInput) => {
  const data = readFile(fileInput)
  const time = removeEmptyValuesInt(data[0].replace('Time:', '').split(' '))
  const distance = removeEmptyValuesInt(
    data[1].replace('Distance:', '').split(' ')
  )
  return [time, distance]
}

const getPerformanceMade = (hold, time) => {
  let speed = 0
  for (let i = 0; i < hold; i++) {
    speed++
  }
  return (time - hold) * speed
}

const resolvePuzzle = (inputFile) => {
  const possibilities = []
  const [time, distance] = extractData(inputFile)
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

module.exports = { extractData, getPerformanceMade, resolvePuzzle }
