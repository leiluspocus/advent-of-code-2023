const {
  resolvePuzzle,
  buildWorkflowMap,
  parseParts,
  parseWorkflow,
} = require('./puzzle1')

test('parse workflow', () => {
  expect(parseWorkflow('px{a<2006:qkq,m>2090:A,rfg}')).toStrictEqual({
    name: 'px',
    rules: ['a<2006:qkq', 'm>2090:A'],
    fallback: 'rfg',
  })
})

test('build workflow map', () => {
  const expectedMap = new Map()
  expectedMap.set('px', { rules: ['a<2006:qkq', 'm>2090:A'], fallback: 'rfg' })
  expectedMap.set('pv', { rules: ['a>1716:R'], fallback: 'A' })
  expect(
    buildWorkflowMap(['px{a<2006:qkq,m>2090:A,rfg}', 'pv{a>1716:R,A}'])
  ).toStrictEqual(expectedMap)
})

test('parse parts', () => {
  expect(parseParts('{x=787,m=2655,a=1222,s=2876}')).toStrictEqual({
    x: 787,
    m: 2655,
    a: 1222,
    s: 2876,
  })
})

test('resolve sample', () => {
  expect(resolvePuzzle('/day19/sample.txt')).toBe(19114)
})

test('resolve puzzle', () => {
  expect(resolvePuzzle('/day19/input.txt')).toBe(480738)
})
