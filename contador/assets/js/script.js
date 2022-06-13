var valorAtual = 0

function aumentar() {
  let aux = document.getElementById('valor')

  if (valorAtual < 10) {
    valorAtual += 1
    aux.innerHTML = `${valorAtual}`
  }

  if (valorAtual > 0) {
    aux.style.color = 'black'
  }
}

function diminuir() {
  let aux = document.getElementById('valor')

  if (valorAtual > -10) {
    valorAtual -= 1
    aux.innerHTML = `${valorAtual}`
  }

  if (valorAtual < 0) {
    aux.style.color = 'red'
  }
}
