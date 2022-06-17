//Caso a função não receba um argumento, a função irá utilizar o valor padrão definido
function elevar(array, expoente = 1) {

    if (!array || !array.length) {
        return "Envie um Array"
    }
    let arrayAlterado = [];

    for (let i = 0; i < array.length; i++) {
        arrayAlterado.push(array[i] ** expoente)
    }

    return arrayAlterado


}


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(elevar([2], 3))