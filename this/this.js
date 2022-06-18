let pessoa = {
  nome: 'Draven',
  posicao: 'Atirador',
  dano: 78,
  atackspeed: 2,
  danoPorSeg: function () {
    return 'Dano por segundo: ' + this.dano * this.atackspeed
  },
  getNome: function () {
    return this.nome
  },
  getPosicao: function () {
    return `${this.posicao}`
  }
}
console.log(pessoa.getNome())
console.log(pessoa.getPosicao())
console.log(pessoa.danoPorSeg())
