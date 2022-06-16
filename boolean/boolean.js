let senhaDigitada = '123'
let senhaNoBanco = '123'
//Validation receberá true,pois as duas variáveis são iguais
let validation = senhaDigitada === senhaNoBanco

if (validation) {
  console.log('Acesso Confirmado')
} else {
  console.log('Acesso Negado!')
}

let senhaDigitada2 = '123'
let senhaNoBanco2 = 123
/*validation2 receberá true,apesar da senha digitada ser uma string e a senha no banco um número,
está sendo utilizado apenas 2 iguais para comparar as variáveis*/
let validation2 = senhaDigitada2 == senhaNoBanco2

if (validation2) {
  console.log('Acesso Confirmado')
} else {
  console.log('Acesso Negado!')
}

let senhaDigitada3 = '123'
let senhaNoBanco3 = 123
/*Validation3 recebera false,pois agora, está sendo utilizado 3 iguais, que compara também o tipo de variável*/
let validation3 = senhaDigitada3 === senhaNoBanco3

if (validation3) {
  console.log('Acesso Confirmado')
} else {
  console.log('Acesso Negado!')
}
