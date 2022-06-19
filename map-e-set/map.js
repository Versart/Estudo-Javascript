let map = new Map()

//Adicionando valores no map
map.set('nome', 'Katarina')
map.set('idade', 22)
console.log(map)
//Pesquisando no map
console.log(map.get('nome'))

map.delete('idade')

console.log(map)
