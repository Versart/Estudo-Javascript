let number1 = 3;

let number2 = 10;

let resultado = number2 / number1;

console.log(resultado)

/*Caso queira que apareça apenas dois dígitos você pode usar o toFixed,
porém,ele retorna uma string e caso você queira trabalhar com ele,você terá que transformar em Inteiro ou Float*/
resultado = resultado.toFixed(2);

//Aqui ele vai concatenar,pois o resultado agora é uma string
console.log(resultado + 10)
    //Solução: Transformando o número em inteiro para poder somar outro valor
resultado = parseFloat(resultado);
//Agora ocorre a soma normalmente
console.log(resultado + 2);