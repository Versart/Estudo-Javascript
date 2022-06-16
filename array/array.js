let lista = []
//Adicionando um valor ao array
lista.push(1)
lista.push('Wesley')
lista.push(10)
//O método push() adiciona  um elemento na última posição da lista

console.log(lista)

//Para retirar um elemento da lista,utilize o método pop()
//O método pop() retira o ultimo elemento da lista()
lista.pop()
console.log(lista)

//Para adicionar um elemento no início da lista,
//Utilize o método unshift()
lista.unshift(0)
console.log(lista)
//Para remover o primeiro elemento de uma lista
//Utilize o método shift()
lista.shift()
console.log(lista)
//Para encontrar o índice em que o elemento está na lista
//utilize o método indexOf()
console.log(lista.indexOf('Wesley'))

//Para saber se um elemento está na lista
//Utilize o includes
console.log(lista.includes(1))

lista.push(2, 3, 4)
console.log(lista)
//Para inverter a ordem da lista
//Utilize o método reverse()
lista.reverse()
console.log(lista)
