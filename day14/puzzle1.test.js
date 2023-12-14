const { resolvePuzzle, moveElementNorthOfColumn } = require('./puzzle1')

test('move element north of column', () => {
  expect(moveElementNorthOfColumn(['.', '.', 'O'], 2)).toStrictEqual([
    'O',
    '.',
    '.',
  ])
})

test('resolve puzzle', () => {
  expect(resolvePuzzle('/day14/sample.txt')).toStrictEqual([])
})
