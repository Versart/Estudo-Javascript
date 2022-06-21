/*método requer:reduce()

callback - A função para executar em cada elemento de matriz (exceto o primeiro elemento se não for fornecido). Ele leva dentro initialValue
accumulator - Ele acumula os valores de retorno do retorno do retorno.
currentValue - O elemento atual que está sendo passado da matriz.
initialValue (opcional) - Um valor que será repassado para a primeira chamada. Se não for fornecido, o primeiro elemento age como a primeira chamada e não será executado nele.callback()accumulatorcallback()*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numeros.reduce(100, (total, item) => total + item))
