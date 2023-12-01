const extractCalibrationValue = require('./puzzle1')

test('first easy case', () => {
  expect(extractCalibrationValue('1abc2')).toBe(12)
})

test('two digits in string', () => {
  expect(extractCalibrationValue('pqr3stu8vwx')).toBe(38)
})

test('multiple digits in string', () => {
  expect(extractCalibrationValue('a1b2c3d4e5f')).toBe(15)
})

test('one digit case', () => {
  expect(extractCalibrationValue('treb7uchet')).toBe(77)
})
