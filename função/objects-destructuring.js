let funcionario = {
    id: 1,
    nome: 'João'
}

function getId({ id }) {
    return id
}

function getNome({ nome }) {
    return nome;
}

console.log(getId(funcionario))
console.log(getNome(funcionario))