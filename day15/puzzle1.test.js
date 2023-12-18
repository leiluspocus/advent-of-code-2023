const { resolvePuzzle, runHashAlgorithm } = require('./puzzle1')

test('run hash algorithm on sample', () => {
  expect(runHashAlgorithm('HASH')).toBe(52)
  expect(runHashAlgorithm('rn=1')).toBe(30)
  expect(runHashAlgorithm('cm-')).toBe(253)
  expect(runHashAlgorithm('qp=3')).toBe(97)
  expect(runHashAlgorithm('cm=2')).toBe(47)
  expect(runHashAlgorithm('qp-')).toBe(14)
  expect(runHashAlgorithm('pc=4')).toBe(180)
  expect(runHashAlgorithm('ot=9')).toBe(9)
  expect(runHashAlgorithm('ab=5')).toBe(197)
  expect(runHashAlgorithm('pc-')).toBe(48)
  expect(runHashAlgorithm('pc=6')).toBe(214)
  expect(runHashAlgorithm('ot=7')).toBe(231)
})

test('resolve puzzle', () => {
  expect(resolvePuzzle('/day15/sample.txt')).toStrictEqual('')
})
