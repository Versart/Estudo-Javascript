function compararNumeros(num1, num2) {
  let tipo1 = typeof 1
  let tipo2 = typeof 1
  if (typeof num1 != tipo1 || typeof num2 != tipo2) {
    return `Envie números!`
  }
  let igualdade = iguais(num1, num2)
  let soma = somar(num1, num2)

  return `${igualdade} ${soma}`
}

function iguais(num1, num2) {
  if (num1 === num2) {
    return `Os números ${num1} e ${num2} são iguais.`
  }
  return `Os números ${num1} e ${num2} não são iguais.`
}

function somar(num1, num2) {
  let resultado10 = 'menor',
    resultado20 = 'menor'
  let soma = num1 + num2
  let compara10 = soma > 10
  let compara20 = soma > 20

  if (compara10) {
    resultado10 = 'maior'
  }
  if (compara20) {
    resultado20 = 'maior'
  }

  return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`
}

console.log(compararNumeros(undefined, undefined))
