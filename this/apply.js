let pessoa = {
  nome: 'Miss Fortune',
  danoMag: 0,
  danoFis: 70
}

let animal = {
  nome: 'Tryndamare',
  danoMag: 2,
  danoFis: 60
}

function getNome() {
  console.log(this.nome)
}

function statusAtual(itemDF, itemDM) {
  console.log(
    `Dano Fisico: ${this.danoFis + itemDF} \nDano Mágico: ${
      this.danoMag + itemDM
    }`
  )
}
getNome.apply(pessoa)
statusAtual.apply(pessoa, [70, 2])
getNome.apply(animal)
statusAtual.apply(animal, [30, 0])
