function extractCalibrationValue(inputString) {
  const inputArray = [...inputString]
  const integersFound = []
  for (const element of inputArray) {
    if (!isNaN(parseInt(element))) {
      integersFound.push(element)
    }
  }
  const lastIndex = integersFound.length - 1
  return parseInt(integersFound[0] + integersFound[lastIndex])
}
module.exports = extractCalibrationValue
