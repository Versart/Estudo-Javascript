let funcionario = {
  id: 1,
  nomeCompleto: {
    primeiroNome: 'Wesley',
    sobreNome: 'Versart'
  }
}

function getId({ id }) {
  return id
}

function getNome({
  nomeCompleto: { primeiroNome: primeiroNome, sobreNome: sobreNome }
}) {
  return `${primeiroNome} ${sobreNome}`
}

console.log(getId(funcionario))
console.log(getNome(funcionario))
