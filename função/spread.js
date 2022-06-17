function somarTresNumeros(x, y, z) {
    return x + y + z;
}


let array = [3, 5, 7]
    //Transforma cada elemento do array em um parâmetro
console.log(somarTresNumeros(...array))