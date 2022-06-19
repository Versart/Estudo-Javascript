let helloWord1 = function versao1() {
  return 'Hello World 1'
}
let helloWord2 = () => {
  return 'Hello World 2'
}
let helloWord3 = () => 'Hello World 3'
console.log(helloWord1())
console.log(helloWord2())
console.log(helloWord3())
//Arrow function não faz hoisting
//soma(3, 5)
//"this sempre será o objeto global.Métodos para modificar seu valor não irão funcionar"
//Não existe o arguments em uma arrow function
//O construtor também não pode ser utilizado
let soma = (num1, num2) => num1 + num2

console.log(soma(3, 5))
