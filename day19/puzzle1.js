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

const resolvePuzzle = (fileInput) => {}

module.exports = { parseWorkflow, parseParts, resolvePuzzle, buildWorkflowMap }
