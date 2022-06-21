let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Forma 1
function retornarPares(array) {
  return array.filter(item => item % 2 == 0)
}
//forma 2
function retornarPares2(array) {
  return array.filter(apenasPares)
}

function apenasPares(item) {
  return item % 2 == 0
}

console.log('Função 1,Numeros pares do array: ', retornarPares(numeros))
console.log('Função 2,Numeros pares do array: ', retornarPares2(numeros))
