//Declarando um objeto
let pessoa = {}
//Criando chave e adicionando valores no objeto
//Duas formas de fazer
pessoa.nome = 'Wesley'
pessoa.nacionalidade = 'Brasil'
pessoa['idade'] = 24

console.log(pessoa)

let time = 'Vasco'
//Adicionando como valor da chave uma variável
pessoa['time'] = time
console.log(pessoa)
//Retorna as chaves do objeto
console.log(Object.keys(pessoa))
//Retorna os valores do objeto
console.log(Object.values(pessoa))
