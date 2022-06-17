//a função autoinvocável é uma função anônima seguida de parênteses para fazer sua chamada e passar argumentos
let triplo = (function(numero) {
    return numero * 3;
})(3);

console.log(triplo)