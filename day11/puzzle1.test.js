const {
  hasNoGalaxies,
  expandUniverse,
  resolvePuzzle,
  getGalaxiesLocations,
} = require('./puzzle1')

test('Verify if column is empty', () => {
  expect(hasNoGalaxies(['.', '.', '.'])).toBe(true)
  expect(hasNoGalaxies(['.', '#', '.'])).toBe(false)
})

test('Expand universe', () => {
  const expectedValue = [
    ['.', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
    ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.', '.'],
    ['.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
    ['#', '.', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.'],
  ]

  expect(expandUniverse('/day11/sample.txt')).toStrictEqual(expectedValue)
})

test('Compute galaxies locations', () => {
  const givenGalaxies = [
    ['.', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
    ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.', '.'],
    ['.', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
    ['#', '.', '.', '.', '.', '#', '.', '.', '.', '.', '.', '.', '.'],
  ]

  expect(getGalaxiesLocations(givenGalaxies)).toStrictEqual([
    [0, 4],
    [1, 9],
    [2, 0],
    [5, 8],
    [6, 1],
    [7, 12],
    [10, 9],
    [11, 0],
    [11, 5],
  ])
})

test('Sample resolution', () => {
  expect(resolvePuzzle('/day11/sample.txt')).toBe(374)
})

test('Sample resolution', () => {
  expect(resolvePuzzle('/day11/input.txt')).toBe(9591768)
})
