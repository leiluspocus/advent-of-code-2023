const {
  resolvePuzzle,
  getStartingPoint,
  getMatrix,
  canMakeStep,
} = require('./puzzle1')

test('get starting point for a matrix', () => {
  const matrixTest = getMatrix('/day21/sample.txt')
  expect(getStartingPoint(matrixTest)).toStrictEqual({ r: 5, c: 5 })
})

test('can make step', () => {
  const matrixTest = [
    ['.', '.', '#'],
    ['.', 'S', '.'],
    ['.', '#', '#'],
  ]
  expect(canMakeStep(matrixTest, { r: 1, c: 1 }, 'north')).toBe(true)
  expect(canMakeStep(matrixTest, { r: 1, c: 1 }, 'east')).toBe(true)
  expect(canMakeStep(matrixTest, { r: 1, c: 1 }, 'west')).toBe(true)
  expect(canMakeStep(matrixTest, { r: 1, c: 1 }, 'south')).toBe(false)
})

test('get starting point for a matrix', () => {
  const matrix = getMatrix('/day21/sample.txt')
  expect(getStartingPoint(matrix)).toStrictEqual({ r: 5, c: 5 })
})

test('resolve puzzle', () => {
  expect(resolvePuzzle('/day21/input.txt')).toStrictEqual(3642)
})
