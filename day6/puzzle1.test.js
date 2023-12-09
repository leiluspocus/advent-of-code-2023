const { extractData, getPerformanceMade, resolvePuzzle } = require('./puzzle1')

test('Parse sample', () => {
  expect(extractData('/day6/sample.txt')).toStrictEqual([
    [7, 15, 30],
    [9, 40, 200],
  ])
})

test('Compute distance', () => {
  expect(getPerformanceMade(0, 7)).toBe(0)
  expect(getPerformanceMade(1, 7)).toBe(6)
  expect(getPerformanceMade(2, 7)).toBe(10)
  expect(getPerformanceMade(3, 7)).toBe(12)
  expect(getPerformanceMade(4, 7)).toBe(12)
  expect(getPerformanceMade(5, 7)).toBe(10)
  expect(getPerformanceMade(6, 7)).toBe(6)
  expect(getPerformanceMade(7, 7)).toBe(0)
})

test('Resolve sample', () => {
  expect(resolvePuzzle('/day6/sample.txt')).toBe(288)
})

test('Resolve Puzzle', () => {
  expect(resolvePuzzle('/day6/input.txt')).toBe(227850)
})
