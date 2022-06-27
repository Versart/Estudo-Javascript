let botao = document.getElementById('botao-alterar')
let body = document.getElementsByTagName('body')[0]
let h1 = document.getElementById('texto-modo')
let footer = document.getElementsByTagName('footer')[0]
botao.addEventListener('click', alterModo)

function alterModo() {
  alterarClasse()
  alterarTexto()
}

function alterarTexto() {
  if (botao.classList.contains('dark-mode')) {
    botao.innerHTML = 'Light Mode'
    h1.innerHTML = 'Dark Mode ON'
  } else {
    botao.innerHTML = 'Dark Mode'
    h1.innerHTML = 'Light Mode ON'
  }
}

function alterarClasse() {
  botao.classList.toggle('dark-mode')
  body.classList.toggle('dark-mode')
  h1.classList.toggle('dark-mode')
  footer.classList.toggle('dark-mode')
}
