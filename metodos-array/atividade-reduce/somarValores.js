let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function somarValores(array) {
  return array.reduce(valores, 100)
}

function valores(acumulador, valor) {
  console.log('Acumulador: ', acumulador)
  console.log('Valor: ', valor)
  return acumulador + valor
}

console.log(somarValores(numeros))
