const {
  transformLettersToDigits,
  resolvePuzzle2,
  resolveCasesEnonce,
  resolveLine,
} = require('./puzzle2')

test('first easy case', () => {
  expect(transformLettersToDigits('onetwothree')).toBe('123') // viva l'🇩🇿
})

test('three letter case', () => {
  expect(transformLettersToDigits('93one')).toBe('931')
})

test('same occurence of digit', () => {
  expect(transformLettersToDigits('fourfour4four')).toBe('4444')
})

test('line where there is no digit to replace', () => {
  expect(transformLettersToDigits('nzp2')).toBe('nzp2')
})

test('edge cases f*** zoneight 💩', () => {
  expect(resolveLine('zoneight234')).toBe(14)
  expect(resolveLine('zoneight')).toBe(18)
})

test('puzzleEnonce', () => {
  expect(resolveCasesEnonce()).toBe(281)
})

test('puzzle2', () => {
  expect(resolvePuzzle2()).toBe(54875) // 54868 is wrong
})
