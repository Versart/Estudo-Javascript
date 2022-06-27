let divPrincipal = document.getElementById('div-principal')

divPrincipal.classList.add('modo-noite')
divPrincipal.classList.remove('modo-dia')

//Caso o modo tarde já esteja na div,ela é retirada,caso não,é adicionada
divPrincipal.classList.toggle('modo-tarde')

document.getElementsByTagName('p')

divPrincipal.style.backgroundColor = 'blue'
