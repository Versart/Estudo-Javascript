let nome = 'Wesley'
let sobrenome = 'Versart'


//Método concat retorna uma string concatenada
let nomeCompleto = nome.concat(' ', sobrenome);

console.log(nomeCompleto)

//Outra forma de atribuir valor a uma string

let nome2 = new String("Maria");

console.log(nome2)
    //Printando aspas
let nome3 = "\"";

console.log(nome3)

let frase = "Olá, tudo bem?";
//Método split separa uma string de acordo com a string passada como parâmetro,exemplo abaixo, estou separando a string por espaço em branco
let frase2 = frase.split(" ")

console.log(frase2.length)
console.log(frase2)

//Verifica se uma string possui o parâmetro passado
console.log(frase.includes("bem"));
//Verifica se a string começa com o parâmetro passado
console.log(frase.startsWith("Olá"));

//replace retorna uma string trocada de acordo com os parâmetros passados
frase = frase.replace('Olá', 'Até');
console.log(frase);