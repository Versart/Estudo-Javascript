function dividirNumeros(a, b) {
    if (!a || !b) {
        let erro = new Error('Envie números válidos')
        erro.name = 'Erro'
        throw erro
    }
    console.log(`Resultado da divisão entre ${a} por ${b} = ${a/b}`)
}

try {
    dividirNumeros(3, 0)
} catch (e) {
    console.log(e)
}
//dividirNumeros(4, 0)
console.log('Olá Mundo')