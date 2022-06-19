let array = [20, 29, 55, 29, 89, 100, 100]

function valoresUnicos(arr) {
  let set = new Set(arr)
  return [...set]
}
console.log(array)
console.log(valoresUnicos(array))
