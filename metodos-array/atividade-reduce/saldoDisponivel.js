let jogos = [
  {
    nome: 'Residen Evil 4',
    preco: 25
  },
  {
    nome: 'God of War 4',
    preco: 100
  },
  {
    nome: 'The Sims 4',
    preco: 75
  }
]
let valePresente = 500

function calcularCompra(valePresente, jogos) {
  return jogos.reduce(function (saldo, jogo) {
    return saldo - jogo.preco
  }, valePresente)
}

console.log(calcularCompra(valePresente, jogos))
