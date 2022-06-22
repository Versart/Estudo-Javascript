function validarArray(array, numero) {
  try {
    if (!array || !numero) throw new ReferenceError('Envie os argumentos')
    if (typeof array !== 'object')
      throw new TypeError('Array precisa ser do tipo object')
    if (typeof numero !== 'number')
      throw new TypeError('Numero deve ser um inteiro')
    if (array.length < numero) throw new RangeError('Índice inválido')

    return array
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log('É um erro do tipo ReferenceError')
      //console.log(e)
      console.log(e.name)
    } else if (e instanceof TypeError) {
      console.log('É um erro de tipo TypeError')
      console.log(e)
      console.log(e.name)
      console.log(e.stack)
    } else if (e instanceof RangeError) {
      console.log('É um erro de tipo RangeError')
      console.log(e)
      console.log(e.name)
      console.log(e.stack)
    } else {
      console.log('Tipo de erro não esperado')
      console.log(e)
      console.log(e.name)
      console.log(e.stack)
    }
  }
}

let array = [1, 2]
let num = 2

validarArray(array)
console.log('Foi tratado')
