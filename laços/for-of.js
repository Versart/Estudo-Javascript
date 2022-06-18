let pessoa1 = {
  id: 1,
  nome: 'Lux'
}
let pessoa2 = {
  id: 2,
  nome: 'Draven'
}

let pessoas = [
  {
    pessoa1,
    pessoa2
  }
]

for (pessoa of pessoas) {
  for (dado in pessoa) {
    console.log(pessoa[dado])
  }
}
