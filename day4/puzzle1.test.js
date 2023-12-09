const {
  resolvePuzzle,
  countPoints,
  extractWiningCombinaisonAndProposals,
} = require('./puzzle1')

test('Resolve first line', () => {
  expect(
    extractWiningCombinaisonAndProposals(
      'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53'
    )
  ).toStrictEqual([
    [41, 48, 83, 86, 17],
    [83, 86, 6, 31, 17, 9, 48, 53],
  ])
  expect(
    countPoints([41, 48, 83, 86, 17], [83, 86, 6, 31, 17, 9, 48, 53])
  ).toBe(8)
})

test('Resolve line with 3 digits card', () => {
  expect(
    extractWiningCombinaisonAndProposals(
      'Card 196: 51 64 16 76 21 48 58 99 46 69 | 79 26 55 70 20 71 44 80 97 63 29 25  1 50  8 10 78 68 61 13 36 49 84 81  6'
    )
  ).toStrictEqual([
    [51, 64, 16, 76, 21, 48, 58, 99, 46, 69],
    [
      79, 26, 55, 70, 20, 71, 44, 80, 97, 63, 29, 25, 1, 50, 8, 10, 78, 68, 61,
      13, 36, 49, 84, 81, 6,
    ],
  ])
  expect(
    countPoints(
      [51, 64, 16, 76, 21, 48, 58, 99, 46, 69],
      [
        79, 26, 55, 70, 20, 71, 44, 80, 97, 63, 29, 25, 1, 50, 8, 10, 78, 68,
        61, 13, 36, 49, 84, 81, 6,
      ]
    )
  ).toBe(0)
})

test('Resolve sample', () => {
  expect(resolvePuzzle('/day4/enonce.txt')).toBe(13)
})

test('Resolve puzzle', () => {
  expect(resolvePuzzle('/day4/input.txt')).toBe(21568)
})
