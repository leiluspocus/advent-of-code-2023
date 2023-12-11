const { readFile } = require('../helpers/file')

const getColumn = (arr, n) => arr.map((c) => c[n])

const hasNoGalaxies = (column) => {
  let empty = true
  for (let i = 0; i < column.length; i++) {
    if (column[i] !== '.') {
      empty = false
    }
  }
  return empty
}

const expandUniverse = (fileInput) => {
  const data = readFile(fileInput)
  const emptyColumnIds = []
  const emptyLineIds = []
  // Construire la matrice
  let matrice = []
  for (let i = 0; i < data.length; i++) {
    matrice[i] = [...data[i]]
  }
  const nbColumns = matrice[0].length
  // Vérifier si une colonne est vide, récupérer son indice
  for (let i = 0; i < nbColumns; i++) {
    const column = getColumn(matrice, i)
    if (hasNoGalaxies(column)) {
      emptyColumnIds.push(i)
    }
  }
  for (let i = 0; i < matrice.length; i++) {
    if (hasNoGalaxies(matrice[i])) {
      emptyLineIds.push(i)
    }
  }
  // Construct expanded universe
  for (let i = 0; i < emptyLineIds.length; i++) {
    // Create new empty line
    const newLine = []
    for (let j = 0; j < nbColumns; j++) {
      newLine.push('.')
    }
    matrice.splice(emptyLineIds[i] + i, 0, newLine)
  }
  for (let i = 0; i < emptyColumnIds.length; i++) {
    const newLine = []
    for (let k = 0; k < matrice.length; k++) {
      matrice[k].splice(emptyColumnIds[i] + i, 0, '.')
    }
  }
  return matrice
}

const resolvePuzzle = (input) => {
  return 42
}

module.exports = { hasNoGalaxies, resolvePuzzle, expandUniverse }
