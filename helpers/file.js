const fs = require('fs')
const path = require('path')

const readFile = (filePath) => {
  let content = fs.readFileSync(process.cwd() + filePath).toString()
  const puzzle = content.split('\n')
  puzzle.pop() // blank line
  return puzzle
}

module.exports = { readFile }
