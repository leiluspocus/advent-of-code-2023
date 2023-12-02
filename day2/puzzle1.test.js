const {
  extractGameResults,
  extractGameID,
  removeGameInfos,
  resolvePuzzle,
} = require('./puzzle1')

test('preliminary string treatment snif', () => {
  expect(
    extractGameID('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')
  ).toBe(1)
  expect(
    extractGameID(
      'Game 100: 4 blue, 14 red; 12 red, 1 blue; 2 red, 2 blue; 8 red; 14 red, 2 blue, 1 green; 3 blue'
    )
  ).toBe(100)
  expect(
    removeGameInfos('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')
  ).toBe('3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')
  expect(
    removeGameInfos(
      'Game 100: 4 blue, 14 red; 12 red, 1 blue; 2 red, 2 blue; 8 red; 14 red, 2 blue, 1 green; 3 blue'
    )
  ).toBe(
    '4 blue, 14 red; 12 red, 1 blue; 2 red, 2 blue; 8 red; 14 red, 2 blue, 1 green; 3 blue'
  )
  expect(
    extractGameResults('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')
  ).toStrictEqual([
    { blue: 3, red: 4 },
    { blue: 6, green: 2, red: 1 },
    { green: 2 },
  ])
  expect(
    extractGameResults(
      'Game 100: 4 blue, 14 red; 12 red, 1 blue; 2 red, 2 blue; 8 red; 14 red, 2 blue, 1 green; 3 blue'
    )
  ).toStrictEqual([
    { blue: 4, red: 14 },
    { blue: 1, red: 12 },
    { red: 2, blue: 2 },
    { red: 8 },
    { blue: 2, green: 1, red: 14 },
    { blue: 3 },
  ])
})

test('enonce resolution', () => {
  expect(resolvePuzzle('/day2/enonce.txt')).toBe(8)
})

test('real puzzle resolution', () => {
  expect(resolvePuzzle('/day2/input.txt')).toBe(2176)
})
