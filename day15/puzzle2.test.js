const {
  extractLabel,
  resolvePuzzle,
  buildLensesBox,
  resolveFocusingPowerOfLens,
  extractDigitValue,
} = require('./puzzle2')

test('label extraction', () => {
  expect(extractLabel('rn=1')).toBe('rn')
  expect(extractLabel('cm-')).toBe('cm')
})

test('digit extraction', () => {
  expect(extractDigitValue('rn=1')).toBe(1)
  expect(extractDigitValue('gdrzpc 1')).toBe(1)
})

test('build lenses box', () => {
  expect(buildLensesBox('rn=1')).toStrictEqual([['rn 1']])
  expect(buildLensesBox('rn=1,cm-')).toStrictEqual([['rn 1']])
  expect(buildLensesBox('rn=1,cm-,qp=3')).toStrictEqual([['rn 1'], ['qp 3']])
  expect(buildLensesBox('rn=1,cm-,qp=3,cm=2')).toStrictEqual([
    ['rn 1', 'cm 2'],
    ['qp 3'],
  ])
  expect(buildLensesBox('rn=1,cm-,qp=3,cm=2,qp-')).toStrictEqual([
    ['rn 1', 'cm 2'],
  ])
  expect(buildLensesBox('rn=1,cm-,qp=3,cm=2,qp-,pc=4')).toStrictEqual([
    ['rn 1', 'cm 2'],
    ,
    ,
    ['pc 4'],
  ])
  expect(buildLensesBox('rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9')).toStrictEqual([
    ['rn 1', 'cm 2'],
    ,
    ,
    ['pc 4', 'ot 9'],
  ])
  expect(buildLensesBox('rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5')).toStrictEqual(
    [['rn 1', 'cm 2'], , , ['pc 4', 'ot 9', 'ab 5']]
  )
  expect(
    buildLensesBox('rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-')
  ).toStrictEqual([['rn 1', 'cm 2'], , , ['ot 9', 'ab 5']])
  expect(
    buildLensesBox('rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6')
  ).toStrictEqual([['rn 1', 'cm 2'], , , ['ot 9', 'ab 5', 'pc 6']])
  expect(
    buildLensesBox('rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7')
  ).toStrictEqual([['rn 1', 'cm 2'], , , ['ot 7', 'ab 5', 'pc 6']])
})

test('Resolve sample', () => {
  expect(
    resolveFocusingPowerOfLens([['rn 1', 'cm 2'], , , ['ot 7', 'ab 5', 'pc 6']])
  ).toBe(145)
})

test('run hash algorithm on puzzle', () => {
  expect(resolvePuzzle('/day15/input.txt')).toBe(213097)
})
