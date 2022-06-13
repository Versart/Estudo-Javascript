var valorAtual = 0;

function aumentar() {
    let aux = document.getElementById('valor')
    valorAtual += 1;
    aux.innerHTML = `${valorAtual}`
}

function diminuir() {
    let aux = document.getElementById('valor')
    if (valorAtual !== 0) {
        valorAtual -= 1;
        aux.innerHTML = `${valorAtual}`
    }

}
