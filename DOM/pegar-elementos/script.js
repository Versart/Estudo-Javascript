let tituloo = document.getElementById('titulo')
tituloo.innerHTML = 'Mudei o h1'

let items = document.getElementsByTagName('li')

let sections = document.getElementsByClassName('textos')

let classes = document.querySelectorAll('.lista.textos')

let classes2 = document.querySelectorAll('li.item4')

//Criando elemento
let h2criado = document.createElement('h2')
h2criado.innerHTML = 'H2 criado'
//Adiciona um elemento
document.getElementById('criar').appendChild(h2criado)

let outroH2 = document.createElement('h2')
outroH2.innerHTML = 'Outro h2 criado'

document.getElementById('criar').replaceChild(outroH2, h2criado)
/*Removendo um elemento
document.getElementById('criar').removeChild(documento)*/
