//Callback é uma função que recebe como argumento outra função

let operacao = function(operacao, num1, num2) {
    return operacao(num1, num2);
}


function somar(num1, num2) {
    return num1 + num2
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

let resSoma = operacao(somar, 3, 5);
let resMultiplica = operacao(multiplicar, 3, 5);

console.log(resSoma);
console.log(resMultiplica)