//arguments é um array que possui todos os parâmetros passados para a função
function arguments() {
    let max = -Infinity

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}


console.log(arguments(33, 78, 74, 50))