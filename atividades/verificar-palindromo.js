function verificarPalindromo1(string) {
  if (!string) {
    return console.log('String não identificada')
  }
  if (string === string.split('').reverse().join('')) {
    console.log(`A palavra ${string} é um palíndromo`)
  } else {
    console.log(`A palavra ${string} não é um palíndromo`)
  }
}
function verificarPalindromo2(string) {
  if (!string) {
    return console.log('String não identificada')
  }
  let aux = []
  for (let i = 0; i < string.length; i++) {
    aux[i] = string.charAt(i)
  }
  if (aux.join('') === string) {
    console.log(`A palavra ${string} é um palíndromo`)
  }
  console.log(aux)
}
function verificarPalindromo3(string) {
  if (!string) {
    return console.log('String não identificada')
  }
  let palindromo = true
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      palindromo = false
      break
    }
  }
  if (palindromo) {
    console.log(`A palavra ${string} é um palíndromo`)
  } else {
    console.log(`A palavra ${string} não é um palíndromo`)
  }
}

verificarPalindromo3('ovo')
