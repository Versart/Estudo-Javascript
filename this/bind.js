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
let cloneFuncao1 = getNome.bind(pessoa)
let cloneFuncao2 = statusAtual.bind(pessoa, 30, 30)
cloneFuncao1()
cloneFuncao2()
