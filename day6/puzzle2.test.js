const { resolvePuzzle } = require('./puzzle2')

test.skip('Resolve sample - Puzzle 2', () => {
  expect(resolvePuzzle('/day6/sample2.txt')).toBe(71503)
})
