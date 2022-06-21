function somarNumeros(a, b) {
    if (!a || !b) {
        throw 'Envie dois números'
    } else {
        return a + b;
    }
}
try {
    console.log(somarNumeros(1, 0))
} catch (e) {
    console.log(e)
} finally {
    console.log('Fim do Programa')
}