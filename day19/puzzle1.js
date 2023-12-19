const { readFile } = require('../helpers/file')

const parseWorkflow = (str) => {
  const workflowNameExtractor = new RegExp('(.+?)\\{', 'gm')
  const workflowName = workflowNameExtractor.exec(str)[1]
  const rules = str
    .replace(workflowName, '')
    .replace('{', '')
    .replace('}', '')
    .split(',')
  const fallback = rules.pop()
  return { name: workflowName, rules, fallback }
}

const buildWorkflowMap = (data) => {
  const workflowMap = new Map()
  for (const line of data) {
    const workflow = parseWorkflow(line)
    workflowMap.set(workflow.name, {
      rules: workflow.rules,
      fallback: workflow.fallback,
    })
  }
  return workflowMap
}

const parseParts = (str) => {
  let parts = str.replace('{', '').replace('}', '').split(',')
  const obj = {}
  for (const part of parts) {
    const keyValue = part.split('=')
    obj[keyValue[0]] = parseInt(keyValue[1])
  }
  return obj
}

const separateWorkflowParts = (fileContent) => {
  const dataWorkflow = []
  const dataParts = []
  for (const line of fileContent) {
    if (!line.startsWith('{') && line !== '') {
      dataWorkflow.push(line)
    } else {
      if (line !== '') dataParts.push(line)
    }
  }
  return [dataWorkflow, dataParts]
}

const computeIfPartAccepted = (
  workflowMap,
  rules,
  fallback,
  parsedPart,
  finalResult = null
) => {
  const { x, m, a, s } = parsedPart
  while (finalResult === null) {
    for (const rule of rules) {
      const [condition, goToStep] = rule.split(':')
      if (eval(condition)) {
        if (goToStep === 'A' || goToStep === 'R') {
          finalResult = goToStep
          return finalResult
        } else {
          rules = workflowMap.get(goToStep).rules
          return computeIfPartAccepted(
            workflowMap,
            workflowMap.get(goToStep).rules,
            workflowMap.get(goToStep).fallback,
            parsedPart,
            finalResult
          )
        }
      }
    }
    if (finalResult === null) {
      if (fallback === 'A' || fallback === 'R') {
        return fallback
      }
      return computeIfPartAccepted(
        workflowMap,
        workflowMap.get(fallback).rules,
        workflowMap.get(fallback).fallback,
        parsedPart,
        finalResult
      )
    }
  }
  return finalResult
}

const resolvePuzzle = (fileInput) => {
  const file = readFile(fileInput)
  const [dataWorkflow, dataParts] = separateWorkflowParts(file)
  let sum = 0

  // Build workflow map
  const workflowMap = buildWorkflowMap(dataWorkflow)

  for (const part of dataParts) {
    const parsedPart = parseParts(part)
    const rules = workflowMap.get('in').rules
    const fallback = workflowMap.get('in').fallback
    const finalResult = computeIfPartAccepted(
      workflowMap,
      rules,
      fallback,
      parsedPart
    )
    if (finalResult === 'A') {
      const { x, m, a, s } = parsedPart
      sum = sum + x + m + a + s
    }
  }
  return sum
}

module.exports = { parseWorkflow, parseParts, resolvePuzzle, buildWorkflowMap }
