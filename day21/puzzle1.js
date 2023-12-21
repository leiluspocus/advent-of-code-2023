const { buildMatrix } = require('../helpers/math')

const getMatrix = (fileInput) => {
  return buildMatrix(fileInput)
}
const getStartingPoint = (matrix) => {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === 'S') {
        return { r, c }
      }
    }
  }
  return {}
}

const canMakeStep = (matrix, position, direction) => {
  switch (direction) {
    case 'north':
      if (
        matrix[position.r - 1] === undefined ||
        matrix[position.r - 1][position.c] === undefined
      )
        return false
      return matrix[position.r - 1][position.c] === '.'
    case 'east':
      if (
        matrix[position.r] === undefined ||
        matrix[position.r][position.c + 1] === undefined
      )
        return false
      return matrix[position.r][position.c + 1] === '.'
    case 'south':
      if (
        matrix[position.r + 1] === undefined ||
        matrix[position.r + 1][position.c] === undefined
      )
        return false
      return matrix[position.r + 1][position.c] === '.'
    case 'west':
      if (
        matrix[position.r] === undefined ||
        matrix[position.r][position.c - 1] === undefined
      )
        return false
      return matrix[position.r][position.c - 1] === '.'
  }
}

const travelMatrix = (matrix, position, stepsRemaining = 64) => {
  let canMoveNorth = false
  let canMoveSouth = false
  let canMoveEast = false
  let canMoveWest = false
  if (
    matrix[position.r] === undefined ||
    matrix[position.r][position.c] === undefined
  ) {
    return matrix
  }
  if (matrix[position.r][position.c] === '#') {
    return matrix
  }
  if (stepsRemaining <= 0) {
    return matrix
  }
  if (canMakeStep(matrix, position, 'north')) {
    canMoveNorth = true
  }
  if (canMakeStep(matrix, position, 'south')) {
    canMoveSouth = true
  }
  if (canMakeStep(matrix, position, 'east')) {
    canMoveEast = true
  }
  if (canMakeStep(matrix, position, 'west')) {
    canMoveWest = true
  }

  if (matrix[position.r][position.c] == '.')
    matrix[position.r][position.c] = 'O'
  stepsRemaining = stepsRemaining - 1
  if (canMoveWest) {
    // Next step
    return travelMatrix(
      matrix,
      { r: position.r, c: position.c - 1 },
      stepsRemaining
    )
  }
  if (canMoveSouth) {
    // Next step
    return travelMatrix(
      matrix,
      { r: position.r + 1, c: position.c },
      stepsRemaining
    )
  }
  if (canMoveNorth) {
    // Next step
    return travelMatrix(
      matrix,
      { r: position.r - 1, c: position.c },
      stepsRemaining
    )
  }
  if (canMoveEast) {
    // Next step
    return travelMatrix(
      matrix,
      { r: position.r, c: position.c + 1 },
      stepsRemaining
    )
  }
}

const resolvePuzzle = (fileInput) => {
  const matrix = getMatrix(fileInput)
  const exploredMatrix = travelMatrix(matrix, getStartingPoint(matrix))

  let reachablePlots = 0

  for (let r = 0; r < exploredMatrix.length; r++) {
    for (let c = 0; c < exploredMatrix[r].length; c++) {
      if (exploredMatrix[r][c] === 'O') {
        reachablePlots++
      }
    }
  }

  return reachablePlots
}

module.exports = {
  resolvePuzzle,
  getStartingPoint,
  getMatrix,
  canMakeStep,
  travelMatrix,
}
