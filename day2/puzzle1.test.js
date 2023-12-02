const {
  extractGameResults,
  extractGameID,
  removeGameInfos,
  resolvePuzzle,
} = require('./puzzle1')

test('preliminary string treatment', () => {
  expect(
    extractGameID('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')
  ).toBe(1)
  expect(
    removeGameInfos('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')
  ).toBe('3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')
  expect(
    extractGameResults('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')
  ).toStrictEqual([
    { blue: 3, red: 4 },
    { blue: 6, green: 2, red: 1 },
    { green: 2 },
  ])
})

test('enonce resolution', () => {
  expect(resolvePuzzle('/day2/enonce.txt')).toBe(8)
})

test('real puzzle resolution', () => {
  expect(resolvePuzzle('/day2/input.txt')).toBe(2176)
})
