const { resolvePuzzle } = require('./puzzle1')

test('enonce resolution', () => {
  expect(resolvePuzzle('/day3/enonce.txt')).toBe(4361)
})

/*test('puzzle resolution', () => {
  expect(resolvePuzzle('/day3/input.txt')).toBe(514969) // 486287 too low
})*/
