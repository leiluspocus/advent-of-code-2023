const convertStringWithNumbersToArray = (arr) => {
  const arrNb = []
  for (const element of arr) {
    if (!isNaN(parseInt(element))) {
      arrNb.push(parseInt(element))
    }
  }
  return arrNb
}

module.exports = { convertStringWithNumbersToArray }
