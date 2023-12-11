const { readFile } = require('../helpers/file')
const { sum } = require('../helpers/math')

const getColumn = (arr, n) => arr.map((c) => c[n])

const hasNoGalaxies = (column) => {
  return column.every((element) => element === '.')
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
    for (let k = 0; k < matrice.length; k++) {
      matrice[k].splice(emptyColumnIds[i] + i, 0, '.')
    }
  }
  return matrice
}

const getGalaxiesLocations = (galaxies) => {
  let galaxiesLocations = []
  for (let i = 0; i < galaxies.length; i++) {
    for (let j = 0; j < galaxies[0].length; j++) {
      if (galaxies[i][j] === '#') {
        galaxiesLocations.push([i, j])
      }
    }
  }
  return galaxiesLocations
}

const resolvePuzzle = (input) => {
  // Calculer l'univers étendu
  const expandedUniverse = expandUniverse(input)

  // Calculer les localisations de chaque galaxie dans la matrice
  const locations = getGalaxiesLocations(expandedUniverse)

  // Calculer les distances entre les galaxies
  let distances = []
  for (let i = 0; i < locations.length; i++) {
    for (let j = i + 1; j < locations.length; j++) {
      let [galaxyX, galaxyY] = locations[i]
      let [otherGalaxyX, otherGalaxyY] = locations[j]
      distances.push(
        Math.abs(
          Math.abs(otherGalaxyX - galaxyX) + Math.abs(otherGalaxyY - galaxyY)
        )
      )
    }
  }
  return sum(distances)
}

module.exports = {
  hasNoGalaxies,
  resolvePuzzle,
  expandUniverse,
  getGalaxiesLocations,
}
