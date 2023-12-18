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
  const arr = new Array(256).fill().map(() => [])
  arr[0] = ['rn 1']
  expect(buildLensesBox('rn=1')).toStrictEqual(arr)
  expect(buildLensesBox('rn=1,cm-')).toStrictEqual(arr)
  arr[0] = ['rn 1']
  arr[1] = ['qp 3']
  expect(buildLensesBox('rn=1,cm-,qp=3')).toStrictEqual(arr)
  arr[0][1] = 'cm 2'
  expect(buildLensesBox('rn=1,cm-,qp=3,cm=2')).toStrictEqual(arr)
  arr[0] = ['rn 1', 'cm 2']
  arr[1] = []
  expect(buildLensesBox('rn=1,cm-,qp=3,cm=2,qp-')).toStrictEqual(arr)
  arr[3] = ['pc 4']
  expect(buildLensesBox('rn=1,cm-,qp=3,cm=2,qp-,pc=4')).toStrictEqual(arr)
  arr[3][1] = 'ot 9'
  expect(buildLensesBox('rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9')).toStrictEqual(arr)
  arr[3][2] = 'ab 5'
  expect(buildLensesBox('rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5')).toStrictEqual(
    arr
  )
  arr[3].splice(0, 1)
  expect(
    buildLensesBox('rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-')
  ).toStrictEqual(arr)
  arr[3][2] = 'pc 6'
  expect(
    buildLensesBox('rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6')
  ).toStrictEqual(arr)
  arr[3][0] = 'ot 7'
  expect(
    buildLensesBox('rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7')
  ).toStrictEqual(arr)
})

test('Resolve sample', () => {
  const arr = new Array(256).fill().map(() => [])
  arr[0] = ['rn 1', 'cm 2']
  arr[3] = ['ot 7', 'ab 5', 'pc 6']
  expect(resolveFocusingPowerOfLens(arr)).toBe(145)
})

test('run hash algorithm on puzzle', () => {
  expect(resolvePuzzle('/day15/input.txt')).toBe(213097)
})
