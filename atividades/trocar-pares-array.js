function trocarPares(array) {
  if (!array || array.length == 0) {
    return -1
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      array[i] = 0
    }
  }
  console.log(array)
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
trocarPares(null)
