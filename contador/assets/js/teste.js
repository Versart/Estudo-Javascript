function numeroImpar(array) {
    let impares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            impares.push(array[i]);
        }
    }
    return impares;
}


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];


console.log('Números Impares:' + numeroImpar(numeros))