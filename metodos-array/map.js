let array = [1, 3, 5, 7]
let array2 = [2, 4, 6, 8]

//Retorna um novo array de acordo com a função passada
console.log(array.map(num => num * 2))

array2.forEach(dobrar)

console.log(array2)

function dobrar(item, index, array) {
  array[index] = item * 2
}
