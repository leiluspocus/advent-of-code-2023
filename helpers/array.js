const removeEmptyValuesInt = (arr) => {
  const nbs = []
  for (let i = 0; i < arr.length; i++) {
    const element = parseInt(arr[i])
    if (!isNaN(element)) {
      nbs.push(element)
    }
  }
  return nbs
}

module.exports = { removeEmptyValuesInt }
