//Transforma vários argumentos em um array
function somarNumeros(...args) {
  let soma = 0

  for (let i = 0; i < args.length; i++) {
    soma += args[i]
  }
  return soma
}

console.log(somarNumeros(1, 2, 3, 4, 5, 6, 7))
