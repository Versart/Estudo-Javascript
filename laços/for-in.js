let pessoa1 = {
  id: 1,
  nome: 'Lux'
}
let pessoa2 = {
  id: 2,
  nome: 'Draven'
}
//Dessa forma irá printar as chaves
for (dado in pessoa1) {
  console.log(dado)
}
//Dessa forma irá printar os valores
for (dado in pessoa1) {
  console.log(pessoa1[dado])
}
