const { resolvePuzzle } = require('./puzzle2')

test('Resolve sample - Puzzle 2', () => {
  expect(resolvePuzzle('/day6/sample2.txt')).toBe(71503)
})

test('Resolve Puzzle 2', () => {
  expect(resolvePuzzle('/day6/input.txt')).toBe(42948149)
})
