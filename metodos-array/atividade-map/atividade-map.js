let maca = {
  value: 2
}
let melancia = {
  value: 5
}

let numeros = [1, 2]
function mapComThis(arr, objeto) {
  return arr.map(item => item * objeto.value)
}

console.log(mapComThis(numeros, maca))
console.log(mapComThis(numeros, melancia))
