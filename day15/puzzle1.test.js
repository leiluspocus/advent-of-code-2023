const {
  resolvePuzzle,
  runHashAlgorithm,
  getSumOfHashValues,
} = require('./puzzle1')

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

test('resolve one line', () => {
  expect(
    getSumOfHashValues('rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7')
  ).toBe(1320)
})

test('resolve puzzle', () => {
  expect(resolvePuzzle('/day15/input.txt')).toBe(520500)
})
