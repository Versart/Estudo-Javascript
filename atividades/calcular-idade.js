let pessoa = {
  nome: 'Draven',
  idade: 33
}

function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade`
}

console.log(calculaIdade.call(pessoa, 20))
