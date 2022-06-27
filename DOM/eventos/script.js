let botaoEnviar = document.getElementById('botao-enviar')

botaoEnviar.addEventListener('click', enviado)

function enviado() {
  alert('Formulário enviado')
}

function alterarCor(elemento) {
  elemento.style.backgroundColor = 'red'
}

function alterarCor2(elemento) {
  elemento.style.backgroundColor = 'blue'
}

//document.getElementById().style.backgroundColor
