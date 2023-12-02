const { resolvePuzzle, getMinimumRequiredBalls } = require('./puzzle2')

test('preliminary treatment on strings', () => {
  expect(
    getMinimumRequiredBalls(
      'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
    )
  ).toStrictEqual({ blue: 6, red: 4, green: 2 })
  expect(
    getMinimumRequiredBalls(
      'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue'
    )
  ).toStrictEqual({ blue: 4, red: 1, green: 3 })
  expect(
    getMinimumRequiredBalls(
      'Game 66: 8 red, 17 blue; 1 green, 9 red, 7 blue; 12 red'
    )
  ).toStrictEqual({ blue: 17, red: 12, green: 1 })
  expect(
    getMinimumRequiredBalls(
      'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red'
    )
  ).toStrictEqual({ blue: 15, red: 14, green: 3 })
  expect(
    getMinimumRequiredBalls(
      'Game 1: 4 green, 2 blue; 1 red, 1 blue, 4 green; 3 green, 4 blue, 1 red; 7 green, 2 blue, 4 red; 3 red, 7 green; 3 red, 3 green'
    )
  ).toStrictEqual({ blue: 4, red: 4, green: 7 })
  expect(
    getMinimumRequiredBalls(
      'Game 66: 8 red, 17 blue; 1 green, 9 red, 7 blue; 12 red'
    )
  ).toStrictEqual({ blue: 17, green: 1, red: 12 })
})

test('enonce resolution', () => {
  expect(resolvePuzzle('/day2/enonce.txt')).toBe(2286)
})

test('puzzle resolution', () => {
  expect(resolvePuzzle('/day2/input.txt')).toBe(63700) // 61583 NOT OK
})
